# :green_heart::blue_heart::purple_heart::sparkling_heart:XiChen's Blog:sparkling_heart::purple_heart::blue_heart::green_heart:

[![Travis](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://linxueyuanstdio.github.io/)
[![Github All Releases](https://img.shields.io/badge/downloads-74.3M%20latest%20version-green.svg)](https://github.com/LinXueyuanStdio/LinXueyuanStdio.github.io/archive/master.zip)
[![GitHub commits](https://img.shields.io/badge/commits-145-blue.svg)](145)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](Apache-2.0)
[![star this repo](http://githubbadges.com/star.svg?user=LinXueyuanStdio&repo=LinXueyuanStdio.github.io&style=default)](https://github.com/LinXueyuanStdio/LinXueyuanStdio.github.io)
[![fork this repo](http://githubbadges.com/fork.svg?user=LinXueyuanStdio&repo=LinXueyuanStdio.github.io&style=default)](https://github.com/LinXueyuanStdio/LinXueyuanStdio.github.io/fork)
[![python](https://img.shields.io/badge/python-2.7%20&%203.6-ff69b4.svg)]()

Blog for recording learning process.

![](assets/README/0.png)
![](assets/README/1.png)

# :green_heart:Browser Support:green_heart:

| <img src="http://raphamorim.io/assets/images/browser-support/chrome.png" width="100px" height="100px" alt="Chrome logo"> | <img src="http://raphamorim.io/assets/images/browser-support/firefox.png" width="100px" height="100px" alt="Firefox logo"> | <img src="http://raphamorim.io/assets/images/browser-support/ie.png" width="100px" height="100px" alt="Internet Explorer logo"> | <img src="http://raphamorim.io/assets/images/browser-support/opera.png" width="100px" height="100px" alt="Opera logo"> | <img src="http://raphamorim.io/assets/images/browser-support/safari.png" width="100px" height="100px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 40+ ✔ | 8+ ✔ | 29+ ✔ |  8+ ✔ |

# :sparkles:Installation:sparkles:

```shell
sudo apt install ruby-full ruby-bundler
sudo gem install jekyll
bundle exec jekyll serve
```

# :notebook_with_decorative_cover:To Do List

- :white_medium_square:timeline:`https://meta.appinn.com/t/markdown/3054`
- :white_check_mark:目录显示问题
- :white_check_mark:overflow:auto滑块定制
- :white_check_mark:generate girls app (bugs)
- :white_medium_square:add html+js+css pratical apps
- :white_medium_square:phone side adjustice
- :white_medium_square:tags page fix tag size bug

# :books:History:books:
- :white_check_mark:`2017-11-03`:add app `preview` : render html from `other repos` in `this site`

![](assets/README/2.png)

- :white_check_mark:`2017-10-27`:enable app in [https://linxueyuanstdio.github.io/app/generate-girls/#/](https://linxueyuanstdio.github.io/app/generate-girls/#/) as mirror of [make.girls.moe](http://make.girls.moe)
- :white_check_mark:`2017-08-31`:miku生日，加一个美美哒小挂件

  ![](assets/README/miku.png)

<!-- Whitespace added for readability -->
```js
{% assign m = page.date | date: "%-m" %}
{{ page.date | date: "%-d" }}
{% case m %}
  {% when '1' %}Januar
  {% when '2' %}Februar
  {% when '3' %}March
  {% when '4' %}April
  {% when '5' %}Mai
  {% when '6' %}Juni
  {% when '7' %}Juli
  {% when '8' %}August
  {% when '9' %}September
  {% when '10' %}Oktober
  {% when '11' %}November
  {% when '12' %}Dezember
{% endcase %}
{{ page.date | date: "%Y" }}
```
:/play trombone:
