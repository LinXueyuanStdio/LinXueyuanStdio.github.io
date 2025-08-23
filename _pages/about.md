---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I started my AI PhD journey in 2024.09, admitted to the [HKUST(GZ)](https://www.hkust-gz.edu.cn)-[IDEA](https://www.idea.edu.cn) Joint PhD Program. My supervisors are Prof. [XIONG Hui](https://www.hkust-gz.edu.cn/people/hui-xiong/) at HKUST(GZ) and Prof. [GUO Jian](https://idea.edu.cn/person/guojian/) at IDEA. Before that, I built the financial agent framework with [MA ye](https://scholar.google.com/citations?hl=zh-CN&user=EDr_qfQAAAAJ) at [iwencai](https://www.iwencai.com/unifiedwap/home/index). I have received my master's degree in [BUPT](https://www.bupt.edu.cn/) (computer) and bachelor's degree in [SYSU](https://www.sysu.edu.cn) (math).

My research interests include natural language processing and reinforcement learning, especially (multimodal) agents, LLM and RLAIF. I also pay attention to common machine learning topics, such as time series, graphs, and reinforcement learning.
[Contact me](mailto:linxy59@mail2.sysu.edu.cn) if you are interested in my following research or want to collaborate with me.

- Financial World Model
- Multi-modal Agent
- Time Series Forecasting & Graph Neural Network
- Complex Reasoning over (Temporal) Knowledge Graph

> Study for creating another world. Pursue eternity and truth. Ginkgo spans the ages, peonies flourish, AGI forges the path to my eternal journey.

<a href='https://scholar.google.com/citations?user=2_ssNsIAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> [[cv]](https://linxueyuanstdio.github.io/cv) [[blog]](https://blog.linxueyuan.online)


<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->

# 🚀 Projects


<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj_latex_ocr.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LaTeX OCR PRO](https://github.com/LinXueyuanStdio/LaTeX_OCR_PRO)

Math Formula OCR Pro, supports handwrite, Chinese-mixed formulas and simple symbol reasoning.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/proj_gpt.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ChatGPT - Review & Rebuttal](https://microsoftedge.microsoft.com/addons/detail/review-rebuttal/aboaofpciadffeflfapkbnjciaefhmhi)

A browser extension for generating reviews and rebuttals in [openreview](https://openreview.net), powered by [ChatGPT](http://chatgpt.com).

</div>
</div>

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NIPS 2023, CCF A</div><img src='images/TFLEX.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**TFLEX: Temporal Feature-Logic Embedding Framework for Complex Reasoning over Temporal Knowledge Graph**](https://linxueyuanstdio.github.io/project-TFLEX)

**Xueyuan Lin**, Haihong E*, Chengjin Xu*, Gengxian Zhou, Haoran Luo, Tianyi Hu, Fenglong Su, Ningyuan Li, and Mingzhi Sun. In Thirty-seventh Conference on Neural Information Processing Systems, 2023.

[[paper]](https://openreview.net/forum?id=oaGdsgB18L) [[code]](http://github.com/LinXueyuanStdio/TFLEX) [[google]](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2_ssNsIAAAAJ&citation_for_view=2_ssNsIAAAAJ:d1gkVwhDpl0C) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> [[project]](https://linxueyuanstdio.github.io/project-TFLEX)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023, CCF A</div><img src='images/NQE.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**NQE: N-ary Query Embedding for Complex Query Answering over Hyper-Relational Knowledge Graphs**](https://ojs.aaai.org/index.php/AAAI/article/view/25576)

Haoran Luo, Haihong E*, Yuhao Yang, Gengxian Zhou, Yikai Guo, Tianyu Yao, Zichen Tang, **Xueyuan Lin**, Kaiyang Wan.  Proceedings of the AAAI Conference on Artificial Intelligence 37.4 (June 2023) pp. 4543–4551. 2023

[[paper]](https://ojs.aaai.org/index.php/AAAI/article/view/25576) [[code]](https://github.com/LHRLAB/NQE)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer Science 2023, CCF B</div><img src='images/QubitE.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**QubitE: Qubit Embedding for Knowledge Graph Completion**](https://www.jsjkx.com/EN/10.11896/jsjkx.221100217)

**Xueyuan Lin**, Haihong E*, Wenyu Song, Haoran Luo and Meina Song. \[J\].Computer Science, 2023, 50(11): 201-209.

[[paper]](https://www.jsjkx.com/EN/10.11896/jsjkx.221100217) [[code]](http://github.com/LinXueyuanStdio/QubitE)

</div>
</div>

<!-- # 🎨 Academic Service -->

<!-- Reviewer: -->

# 🎖 Honors and Awards

- Ph.D. Full Scholarship (**2024.09-2028.09**, ￥720,000)
- First-class Academic Scholarship of Beijing University of Posts and Telecommunications (**2021-2023**)
- Encouragement and Excellence Scholarship of Sun Yat-sen University (**2020**)
- Youmei Student Grant (**2016-2020**)
- National Student Grant (**2016-2017**)
- National Encouragement Scholarship (**2016-2017**)
- National First Prize of the "Discovery Cup" APP Development Group (**2017**)

# 📖 Educations
- 🧑‍🎓 **The Hong Kong University of Science and Technology (Guangzhou)**, 2024 - Present
    - PhD, *Artificial Intelligence Thrust*, Information Hub, Guangzhou
- 🧑‍🎓 **Beijing University of Posts and Telecommunications**, 2020 - 2023
    - Academic master, *Computer Science and Technology*, School of Computer Science (National Demonstrative Software School), Beijing
- 👨‍🎓 **Sun Yat-Sen University**, 2016 - 2020
    - Undergraduate, *Information and Computing Science*, School of Mathematics (Zhuhai), Zhuhai

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->