import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";
import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea } from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";

const suggestions = ["What is Anmol studying?", "Which skills does Anmol have?", "Tell me about the projects", "What is Anmol's career goal?"];

export function AskAnmol() {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const [error, setError] = useState<string | null>(null);
  const { messages, sendMessage, status, stop } = useChat({
    transport,
    onError: err => {
      const msg = err.message || "";
      setError(msg.includes("429") ? "Too many questions right now — please try again in a moment." : msg.includes("402") ? "The assistant is temporarily unavailable." : "Something went wrong. Please try again.");
    },
  });
  const busy = status === "submitted" || status === "streaming";
  const ask = (text: string) => {
    if (!text.trim() || busy) return;
    setError(null);
    sendMessage({ text });
  };
  const last = messages[messages.length - 1];
  const waiting = busy && (!last || last.role === "user" || !last.parts.some(p => p.type === "text" && p.text));

  return (
    <div className="ask-panel">
      <Conversation className="ask-conversation">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState title="Ask about Anmol" description="Answers come only from this portfolio.">
              <div className="ask-suggestions">
                {suggestions.map(s => <Button key={s} variant="outline" size="sm" onClick={() => ask(s)}>{s}</Button>)}
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map(m => (
              <Message from={m.role} key={m.id}>
                <MessageContent>
                  {m.parts.map((part, i) => part.type === "text" ? (m.role === "assistant" ? <MessageResponse key={i}>{part.text}</MessageResponse> : <span key={i}>{part.text}</span>) : null)}
                </MessageContent>
              </Message>
            ))
          )}
          {waiting && <Shimmer>Thinking…</Shimmer>}
          {error && <p className="ask-error" role="alert">{error}</p>}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      <PromptInput onSubmit={msg => ask(msg.text)}>
        <PromptInputTextarea placeholder="e.g. What tools has Anmol worked with?" autoFocus={false} />
        <PromptInputFooter className="justify-end">
          <PromptInputSubmit status={status} onStop={stop} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
