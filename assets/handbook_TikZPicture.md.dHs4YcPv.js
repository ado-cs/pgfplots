import{_ as s,c as i,o as a,U as t}from"./chunks/framework.hUbdJHiz.js";const u=JSON.parse('{"title":"TikZPicture","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/TikZPicture.md","filePath":"handbook/TikZPicture.md"}'),e={name:"handbook/TikZPicture.md"},n=t(`<h1 id="tikzpicture" tabindex="-1">TikZPicture <a class="header-anchor" href="#tikzpicture" aria-label="Permalink to &quot;TikZPicture&quot;">​</a></h1><p>一个 <strong>TikZ</strong> 的基础图元素</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><strong>PGFplots</strong> 的所有的绘图工作都应该包含在 <strong>TikZPicture</strong> 块中：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}[&lt;options&gt;]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{axis}[&lt;options&gt;]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{axis}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}</span></span></code></pre></div><p><strong>TikZPicture</strong> 的 <strong>options</strong> 对块内的所有元素生效：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}[outline/.style={draw=#1,thick,fill=#1!50}]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [outline=red]  at (0,1) {red};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [outline=blue] at (0,0) {blue};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}</span></span></code></pre></div><p>其中 <code>outline/.style={draw=#1,thick,fill=#1!50}</code> 配置包含在该 <strong>TikZPicture</strong> 中所有 <strong>outline</strong> 的样式。</p><p>当有元素启用 <strong>outline</strong> 特性时生效，但当参数重复时，优先使用子节点配置的样式。</p><p>除了配置样式 <strong>style</strong> 之外，还可以配置其他的 key 如 <strong>default：</strong></p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}[outline/.style={draw=#1,thick,fill=#1!50},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    outline/.default=black]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [outline]      at (0,1) {default};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \\node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [outline=blue] at (0,0) {blue};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{tikzpicture}</span></span></code></pre></div><p>更多有关key的介绍可以查看：<a href="https://tikz.dev/pgfkeys#section-keys" target="_blank" rel="noreferrer">PGFKeys</a></p>`,12),l=[n];function p(h,k,r,o,d,c){return a(),i("div",null,l)}const E=s(e,[["render",p]]);export{u as __pageData,E as default};
