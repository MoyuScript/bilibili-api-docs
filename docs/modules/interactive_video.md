# Module interactive_video.py

```python
from bilibili_api import interactive_video
```

互动视频相关操作。

## class IVideo(Video)

互动视频类，各种对互动视频的操作均在里面。继承了 Video 类。

### Attributes

| name       | type       | description   |
| ---------- | ---------- | ------------- |
| credential | Credential | Credential 类 |

### Functions

#### def \_\_init\_\_()

| name       | type                 | description                           |
| ---------- | -------------------- | ------------------------------------- |
| bvid       | str, optional        | BV 号。bvid 和 aid 必须提供其中之一。 |
| aid        | int, optional        | AV 号。bvid 和 aid 必须提供其中之一。 |
| credential | Credential, optional | Credential 类。Defaults to None.      |

#### async def get_pages()

获取分 P 信息。

**Returns:** API 调用返回结果。

#### async def get_download_url()

| name       | type | description          |
| ---------- | ---- | -------------------- |
| page_index | int  | 分 P 号，从 0 开始。 |

获取视频下载信息。

**Returns:** API 调用返回结果。

#### async def submit_story_tree()

| name       | type | description          |
| ---------- | ---- | -------------------- |
| story_tree | str  |  情节树的描述        |

提交情节树。

**Returns:** API 调用返回结果。


