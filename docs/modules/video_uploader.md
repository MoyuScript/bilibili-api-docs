# Module video_uploader.py

```python
from bilibili_api import video_uploader
```

视频上传。使用了 PC 端投稿工具的接口。

## class VideoUploaderCredential

视频上传凭据

### Functions

#### def \_\_init\_\_()

| name       | type          | description |
| ---------- | ------------- | ----------- |
| access_key | str, optional | access_key  |
| account    | str, optional | 账号        |
| password   | str, optional | 密码        |

必须满足 `access_key or (account and password)`

#### async def login()

使用账号密码登录获取 access_key，并设置 `self.access_key`

注意：大部分时候不需要验证码，但是请求过于频繁可能需要，请尽量使用 access_key

#### async def get_access_key()

获取 access_key，若未登录将会自动登录

**Returns:** str: access_key

## VideoUploaderPage

分 P 对象

### Functions

#### def \_\_init\_\_()

| name         | type           | description                      |
| ------------ | -------------- | -------------------------------- |
| video_stream | BufferedIOBase | 视频流                           |
| title        | str            | 视频标题                         |
| description  | str, optional  | 视频简介. Defaults to "".        |
| extension    | str, optional  | 视频流扩展名. Defaults to "mp4". |

#### async def get_size()

获取文件大小

**Returns:** int: 文件大小

#### async def get_md5()

获取文件 MD5

**Returns:** str: md5

## class VideoUploaderEvents(Enum)

上传事件枚举

 **Events:**

+ PRE_PAGE 上传分 P 前

+ PREUPLOAD 获取上传信息

+ PREUPLOAD_FAILED 获取上传信息失败

+ PRE_CHUNK 上传分块前

+ AFTER_CHUNK 上传分块后

+ CHUNK_FAILED 区块上传失败

+ PRE_PAGE_SUBMIT 提交分 P 前

+ PAGE_SUBMIT_FAILED 提交分 P 失败

+ AFTER_PAGE_SUBMIT 提交分 P 后

+ AFTER_PAGE 上传分 P 后

+ PRE_COVER 上传封面前

+ AFTER_COVER 上传封面后

+ COVER_FAILED 上传封面失败

+ PRE_SUBMIT 提交视频前

+ SUBMIT_FAILED 提交视频失败

+ AFTER_SUBMIT 提交视频后

+ COMPLETED 完成上传

+ ABORTED 用户中止

+ FAILED 上传失败

## class VideoUploader(AsyncEvent)

上传视频

### Functions

#### def \_\_init\_\_()

| name         | type                    | description                                                  |
| ------------ | ----------------------- | ------------------------------------------------------------ |
| pages        | list[VideoUploaderPage] | 分 P 列表                                                    |
| meta         | dict                    | 视频信息                                                     |
| credential   | VideoUploaderCredential | 凭据（注意，是 VideoUploaderCredential）                     |
| threads      | int, optional           | 最大并发. Defaults to 5.                                     |
| chunk_size   | int, optional           | 分块大小（字节），不知道什么意思请保持默认. Defaults to 2048*1024. |
| cover_stream | BufferedIOBase          | 封面流                                                       |
| cover_type   | str                     | 封面 MIME 类型，常见后缀对应：jpg: image/jpeg; png: image/png; webp: image/webp. Defaults to "image/jpeg" |

**meta 参数示例：**

```json

{
  "copyright": "int, 投稿类型。1 自制，2 转载。",
  "source": "str, 视频来源。投稿类型为转载时注明来源，为原创时为空。",
  "desc": "str, 视频简介。",
  "desc_format_id": 0,
  "dynamic": "str, 动态信息。",
  "interactive": 0,
  "open_elec": "int, 是否展示充电信息。1 为是，0 为否。",
  "no_reprint": "int, 显示未经作者授权禁止转载，仅当为原创视频时有效。1 为启用，0 为关闭。",
  "subtitles": {
    "lan": "str: 字幕投稿语言，不清楚作用请将该项设置为空",
    "open": "int: 是否启用字幕投稿，1 or 0"
  },
  "tag": "str, 视频标签。使用英文半角逗号分隔的标签组。示例：标签1,标签2,标签3",
  "tid": "int, 分区ID。可以使用 channel 模块进行查询。",
  "title": "str: 视频标题",
  "up_close_danmaku": "bool, 是否关闭弹幕。",
  "up_close_reply": "bool, 是否关闭评论。",
  "dtime": "int?: 可选，定时发布时间戳（秒）"
}

```


meta 保留字段：`videos`, `cover`

#### async def start()

开始上传

**Returns:** dict: 返回带有 bvid 和 aid 的字典。

#### async def abort()

中断上传