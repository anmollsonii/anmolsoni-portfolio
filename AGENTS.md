<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio as a single page with section anchors; the requested content is one continuous personal portfolio.
- Keep example project data separate from presentation and label it as conceptual until actual project details are supplied; avoid invented achievements.
- Keep contact destinations unconfigured until supplied and show an honest availability dialog rather than fabricated links.
- Pre-optimize React, its renderer, and split-route UI dependencies together in Vite; lazy dependency discovery can leave an open preview using incompatible React optimization generations.
