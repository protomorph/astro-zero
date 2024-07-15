
export const codeBlockTemplate = (
  classLanguage: string,
  html: string,
  lang: string,
  meta: string | undefined
) => `<figure class="code-block">
  <figcaption class="code-block__header">
    ${!! lang ? `<span class="code-block__lang">${lang}</span>` : ''}
    <button class="code-block__copy" onclick="copyCode(this)">Copy</button>
  </figcaption>
  <pre class="${classLanguage}"><code class="${classLanguage}">${html}</code></pre>
  ${!! meta ? `<footer class="code-block__footer">${meta}</footer>` : ''}
</figure>`
