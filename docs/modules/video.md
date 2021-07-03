# Module video.py

```python
from bilibili_api import video
```

视频相关操作。

## class Video

视频类，各种对视频的操作均在里面。

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

#### def set_bvid()

| name | type | description |
| ---- | ---- | ----------- |
| bvid | str  | BV 号。     |

设置 bvid。

**Returns:** None

#### def get_bvid()

获取 bvid。

**Returns:** str: bvid

#### def set_aid()

| name | type | description |
| ---- | ---- | ----------- |
| aid  | int  | AV 号。     |

设置 aid。

**Returns:** None

#### def get_aid()

获取 aid。

**Returns:** int: aid

#### async def get_info()

获取视频信息。

**Returns:** API 调用返回结果。

#### async get_stat()

获取视频统计数据（播放量，点赞数等）。

**Returns:** API 调用返回结果。

#### async def get_tags()

获取视频标签。

**Returns:** API 调用返回结果。

#### async def get_chargers()

获取视频充电用户。

**Returns:** API 调用返回结果。

#### async def get_pages()

获取分 P 信息。

**Returns:** API 调用返回结果。

#### async def get_download_url()

| name       | type | description          |
| ---------- | ---- | -------------------- |
| page_index | int  | 分 P 号，从 0 开始。 |

获取视频下载信息。

**Returns:** API 调用返回结果。

#### async def get_related()

获取相关视频信息。

**Returns:** API 调用返回结果。

#### async def has_liked()

视频是否点赞过。

**Returns:** bool: 视频是否点赞过。

#### async def get_pay_coins()

获取视频已投币数量。

**Returns:** int: 视频已投币数量。

#### async def has_favoured()

是否已收藏。

**Returns:** bool: 视频是否已收藏。

#### async def get_media_list()

获取收藏夹列表信息，用于收藏操作，含各收藏夹对该视频的收藏状态。

**Returns:** API 调用返回结果。

#### async def get_danmaku_view():

| name       | type | description          |
| ---------- | ---- | -------------------- |
| page_index | int  | 分 P 号，从 0 开始。 |

获取弹幕设置、特殊弹幕、弹幕数量、弹幕分段等信息。

**Returns:** API 调用返回结果。

#### async def get_danmakus()

| name       | type                    | description                                               |
| ---------- | ----------------------- | --------------------------------------------------------- |
| page_index | int                     | 分 P 号，从 0 开始。                                      |
| date       | datetime.Date, optional | 指定日期后为获取历史弹幕，精确到年月日。Defaults to None. |

获取弹幕。

**Returns:** List[Danmaku]: Danmaku 类的列表。

#### async def get_history_danmaku_index()

| name       | type                    | description                                               |
| ---------- | ----------------------- | --------------------------------------------------------- |
| page_index | int                     | 分 P 号，从 0 开始。                                      |
| date       | datetime.Date, optional | 指定日期后为获取历史弹幕，精确到年月日。Defaults to None. |

获取特定月份存在历史弹幕的日期。

**Returns:** None | List[str]: 调用 API 返回的结果。不存在时为 None。

#### async def has_liked_danmakus()

| name       | type      | description            |
| ---------- | --------- | ---------------------- |
| page_index | int       | 分 P 号，从 0 开始。   |
| ids        | List[int] | 要查询的弹幕 ID 列表。 |

是否已点赞弹幕。

**Returns:** API 调用返回结果。

#### async def send_danmaku()

| name       | type    | description          |
| ---------- | ------- | -------------------- |
| page_index | int     | 分 P 号，从 0 开始。 |
| danmaku    | Danmaku | Danmaku 类。         |

发送弹幕。

**Returns:** API 调用返回结果。

#### async def like_danmaku()

| name       | type           | description                 |
| ---------- | -------------- | --------------------------- |
| page_index | int            | 分 P 号，从 0 开始。        |
| dmid       | int            | 弹幕 ID。                   |
| status     | bool, optional | 点赞状态。Defaults to True. |

点赞弹幕。

**Returns:** API 调用返回结果。

#### async def like()

| name   | type           | description                 |
| ------ | -------------- | --------------------------- |
| status | bool, optional | 点赞状态。Defaults to True. |

点赞视频。

**Returns:** API 调用返回结果。

#### async def pay_coin()

| name | type           | description                          |
| ---- | -------------- | ------------------------------------ |
| num  | int, optional  | 硬币数量，为 1 ~ 2 个。Defaults to 1 |
| like | bool, optional | 是否同时点赞。Defaults to False      |

投币。

**Returns:** API 调用返回结果。

#### async def add_tag()

| name | type | description |
| ---- | ---- | ----------- |
| name | str  | 标签名字。  |

**Returns:** API 调用返回结果。

#### async def delete_tag()

| name   | type | description |
| ------ | ---- | ----------- |
| tag_id | int  | 标签 ID。   |

删除标签。

**Returns:** API 调用返回结果。

#### async def subscribe_tag()

| name   | type | description |
| ------ | ---- | ----------- |
| tag_id | int  | 标签 ID。   |

关注标签。

**Returns:** API 调用返回结果。

#### async def unsubscribe_tag()

| name   | type | description |
| ------ | ---- | ----------- |
| tag_id | int  | 标签 ID。   |

取关标签。

**Returns:** API 调用返回结果。

#### async def set_favorite()

| name          | type                | description                         |
| ------------- | ------------------- | ----------------------------------- |
| add_media_ids | List[int], optional | 要添加到的收藏夹 ID. Defaults to [] |
| del_media_ids | List[int], optional | 要移出的收藏夹 ID. Defaults to []   |

设置视频收藏状况。

**Returns:** API 调用返回结果。

---

## class VideoOnlineMonitor

**Extends:** bilibili_api.utils.AsyncEvent.AsyncEvent

视频在线人数实时监测。

**示例代码：**

```python
import asyncio
from bilibili_api import video

# 实例化
r = video.VideoOnlineMonitor("BV1Bf4y1Q7QP")

# 装饰器方法注册事件监听器
@r.on("ONLINE")
async def handler(data):
    print(data)

# 函数方法注册事件监听器
async def handler2(data):
    print(data)
    r.add_event_listener("ONLINE", handler2)

asyncio.get_event_loop().run_until_complete(r.connect())
```

**事件表：**

| name         | description    | callback                        |
| ------------ | -------------- | ------------------------------- |
| ONLINE       | 在线人数更新。 | dict                            |
| DANMAKU      | 收到实时弹幕   | Danmaku                         |
| DISCONNECTED | 正常断开连接   | None                            |
| ERROR        | 发生错误       | aiohttp.ClientWebSocketResponse |
| CONNECTED    | 成功连接       | None                            |

### Attributes

| name       | type           | description   |
| ---------- | -------------- | ------------- |
| credential | Credential     | Credential 类 |
| logger     | logging.Logger | Logger 类     |


### Sub classes

#### class Datapack

**Extends:** enum.Enum

数据包类型枚举。

+ CLIENT_VERIFY  : 客户端发送验证信息。
+ SERVER_VERIFY  : 服务端响应验证信息。
+ CLIENT_HEARTBEAT: 客户端发送心跳包。
+ SERVER_HEARTBEAT: 服务端响应心跳包。
+ DANMAKU: 实时弹幕更新。

### Functions

#### def \_\_init\_\_()

| name       | type                 | description                                    |
| ---------- | -------------------- | ---------------------------------------------- |
| bvid       | str, optional        | BVID                                           |
| aid        | int, optional        | AID                                            |
| page_index | int, optional        | 分 P 序号. Defaults to 0.                      |
| credential | Credential, optional | Credential 类. Defaults to None.               |
| debug      | bool, optional       | 调试模式，将输出更详细信息. Defaults to False. |

#### async def connect()

连接服务器。

**Returns:** None

#### async def disconnect()

断开服务器。

**Returns:** None

---

## class VideoUploaderPageObject

视频上传分 P 对象。

### Attributes

| name         | type          | description                                                  |
| ------------ | ------------- | ------------------------------------------------------------ |
| title        | str           | 分 P 标题。                                                  |
| video_format | str           | 分 P 的视频格式。可以是 mp4, mkv, mov, wmv。 Default to "mp4"。 |
| description  | str, optional | 分 P 描述。 Defaults to ""。                                 |

### Functions

#### def \_\_init\_\_()

| name         | type              | description                                                  |
| ------------ | ----------------- | ------------------------------------------------------------ |
| stream       | io.BufferedIOBase | 分 P 视频流。可以是 `open()`返回的 FileIO 对象。             |
| title        | str               | 分 P 标题。                                                  |
| video_format | str               | 分 P 的视频格式。可以是 mp4, mkv, mov, wmv。 Default to "mp4"。 |
| description  | str, optional     | 分 P 描述。 Defaults to ""。                                 |

#### def get_total_size()

获取总大小。

**Returns: **int: 视频流总大小。

#### def get_stream()

获取视频流

**Returns: **io.BufferedIOBase: 视频流

---

## class VideoUploader

**Extends:** bilibili_api.utils.AsyncEvent.AsyncEvent

视频上传。任何上传中的出错将会直接抛出错误并终止上传。

**Events:**

| name         | description       | callback                                                     |
| ------------ | ----------------- | ------------------------------------------------------------ |
| COVER_BEGIN  | 准备上传封面      | None                                                         |
| COVER_END    | 封面上传成功      | str: 封面 URL。                                              |
| PAGE_BEGIN   | 开始上传分 P      | VideoUploaderPageObject: 当前分 P 对象                       |
| CHUNK_BEGIN  | 开始上传分 P 分块 | {<br />  "page": VideoUploaderPageObject #  分 P 对象, <br />  "chunk_index": int,   # 区块编号<br />  "total_chunk": int,   # 总区块数量<br />  "range": Tuple[int, int]  # 数据范围<br />} |
| CHUNK_END    | 分块上传结束      | 同 CHUNK_BEGIN                                               |
| PAGE_END     | 分 P 上传结束     | VideoUploaderPageObject: 当前分 P 对象                       |
| SUBMIT_BEGIN | 准备提交视频      | dict: 准备提交的数据                                         |
| SUBMIT_END   | 提交视频结束      | dict: 调用 API 返回结果                                      |

### Attributes

| name       | type                          | description                                                  |
| ---------- | ----------------------------- | ------------------------------------------------------------ |
| cover      | io.BufferedIOBase             | 封面 io 类，比如调用 open() 打开文件后的返回值。             |
| cover_type | str                           | 封面数据 MIME 类型。常见类型对照 jpg: image/jpeg, png: image/png |
| pages      | List[VideoUploaderPageObject] | 分 P 视频列表。                                              |
| credential | Credential                    | Credential 类。                                              |

### Functions

#### def \_\_init\_\_()

| name       | type                          | description                                                  |
| ---------- | ----------------------------- | ------------------------------------------------------------ |
| cover      | io.BufferedIOBase             | 封面 io 类，比如调用 open() 打开文件后的返回值。             |
| cover_type | str                           | 封面数据 MIME 类型。常见类型对照 jpg: image/jpeg, png: image/png |
| pages      | List[VideoUploaderPageObject] | 分 P 视频列表。                                              |
| config     | dict                          | 视频信息，格式参照 self.set_config()                         |
| credential | Credential                    | Credential 类。                                              |

#### def set_config()

| name   | type | description                          |
| ------ | ---- | ------------------------------------ |
| config | dict | 视频信息，格式参照 self.set_config() |

设置上传配置。

不可设置的参数：cover, videos。

参考如下：

```json
{
  "copyright": "int, 投稿类型。1 自制，2 转载。",
  "source": "str, 视频来源。投稿类型为转载时注明来源，为原创时为空。",
  "cover": "str, 封面 URL。。",
  "desc": "str, 视频简介。",
  "desc_format_id": 0,
  "dynamic": "str, 动态信息。",
  "interactive": 0,
  "open_elec": "int, 是否展示充电信息。1 为是，0 为否。",
  "no_reprint": "int, 显示未经作者授权禁止转载，仅当为原创视频时有效。1 为启用，0 为关闭。",
  "subtitles": {
    "lan": "字幕语言，不清楚作用请将该项设置为空",
    "open": 0
  },
  "tag": "str, 视频标签。使用英文半角逗号分隔的标签组。示例：标签1,标签2,标签3",
  "tid": "int, 分区ID。可以使用 channel 模块进行查询。",
  "title": "视频标题",
  "up_close_danmaku": "bool, 是否关闭弹幕。",
  "up_close_reply": "bool, 是否关闭评论。",
  "videos": [
    {
      "desc": "str, 分 P 描述。",
      "filename": "str, 视频上传后的文件名。",
      "title": "str, 分 P 标题"
    }
  ]
}
```

**Returns:** None

#### def get_config()

获取视频信息。

**Returns:** dict: 视频信息

#### async def start()

开始上传。

**Returns:** dict: 包含 bvid 和 aid 的字典。

---

