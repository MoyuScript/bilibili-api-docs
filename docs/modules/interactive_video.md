# Module interactive_video.py

```python
from bilibili_api import interactive_video
```

## async def up_submit_story_tree()
| name       | type                 | description                                       |
| ---------- | -------------------- | ------------------------------------------------- |
| story_tree | str                  | 情节树的描述。参考 bilibili_storytree.StoryGraph  |
| credential | Credential           | Credential 类。up 主需要拥有交互视频              |

提交情节树。up 主需要拥有交互视频。

**Returns:** API 调用返回结果。

## async def up_get_ivideo_pages()
| name       | type                 | description                           |
| ---------- | -------------------- | ------------------------------------- |
| bvid       | str                  | BV 号。                               |
| credential | Credential           | Credential 类。up 主需要拥有交互视频  |

获取交互视频分 P。up 主需要拥有交互视频。

**Returns:** API 调用返回结果。


