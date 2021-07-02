# Module live.py

```python
from bilibili_api import live
```

直播相关。

## class ScreenResolution

**Extends:** enum.Enum

直播源清晰度。

+ FOUR_K        : 4K。
+ ORIGINAL      : 原画。
+ BLU_RAY_DOLBY : 蓝光（杜比）。
+ BLU_RAY       : 蓝光。
+ ULTRA_HD      : 超清。
+ HD            : 高清。
+ FLUENCY       : 流畅。

---

## class LiveProtocol

**Extends:** enum.Enum

直播源流协议。

+ FLV
+ HLS
+ DEFAULT

---

## class LiveFormat

**Extends:** enum.Enum

直播源容器格式。

+ FLV
+ TS
+ FMP4
+ DEFAULT

---

## class LiveCodec

**Extends:** enum.Enum

直播源视频编码

+ AVC
+ HEVC
+ DEFAULT

---

## class LiveRoom

直播类，获取各种直播间的操作均在里边。

### Attributes

| name            | type       | description                   |
| --------------- | ---------- | ----------------------------- |
| room_display_id | int        | 房间展示 ID（即 URL 中的 ID） |
| credential      | Credential | 凭据                          |

### Functions

#### def \_\_init\_\_()

| name            | type                 | description                   |
| --------------- | -------------------- | ----------------------------- |
| room_display_id | int                  | 房间展示 ID（即 URL 中的 ID） |
| credential      | Credential, optional | 凭据. Defaults to None.       |

#### async def get_room_play_info()

获取房间信息（真实房间号，封禁情况等）

**Returns:** API 调用返回结果

#### async def get_chat_conf()

获取聊天弹幕服务器配置信息(websocket)

**Returns:** API 调用返回结果

#### async def get_room_info()

获取直播间信息（标题，简介等）

**Returns:** API 调用返回结果

#### async def get_user_info_in_room()

获取自己在直播间的信息（粉丝勋章等级，直播用户等级等）

**Returns:** API 调用返回结果

#### async def get_dahanghai()

| name | type          | description         |
| ---- | ------------- | ------------------- |
| page | int, optional | 页码. Defaults to 1 |

获取大航海列表

**Returns:** API 调用返回结果

#### async def get_seven_rank()

获取七日榜

**Returns:** API 调用返回结果

#### async def get_fans_medal_rank()

获取粉丝勋章排行

**Returns:** API 调用返回结果

#### async def get_black_list()

获取房间黑名单

**Returns:** API 调用返回结果

#### async def get_room_play_url()

| name              | type                       | description                                   |
| ----------------- | -------------------------- | --------------------------------------------- |
| screen_resolution | ScreenResolution, optional | 清晰度. Defaults to ScreenResolution.ORIGINAL |

获取房间直播流列表

**Returns:** API 调用返回结果

#### async def get_room_play_info_v2()

| name          | type                       | description                                          |
| ------------- | -------------------------- | ---------------------------------------------------- |
| live_protocol | LiveProtocol, optional     | 直播源流协议. Defaults to LiveProtocol.DEFAULT.      |
| live_format   | LiveFormat, optional       | 直播源容器格式. Defaults to LiveFormat.DEFAULT.      |
| live_codec    | LiveCodec, optional        | 直播源视频编码. Defaults to LiveCodec.DEFAULT.       |
| live_qn       | ScreenResolution, optional | 直播源清晰度. Defaults to ScreenResolution.ORIGINAL. |

获取房间信息及可用清晰度列表

**Returns:** API 调用返回结果

#### async def ban_user()

| name | type          | description                     |
| ---- | ------------- | ------------------------------- |
| uid  | int           | 用户 UID                        |
| hour | int, optional | 封禁时长（小时）. Defaults to 1 |

封禁用户

**Returns:** API 调用返回结果

#### async def unban_user()

| name     | type | description                               |
| -------- | ---- | ----------------------------------------- |
| block_id | int  | 封禁用户时会返回该封禁事件的 ID，使用该值 |

解封用户

**Returns:** API 调用返回结果

#### async def send_danmaku()

| name    | type    | description |
| ------- | ------- | ----------- |
| danmaku | Danmaku | 弹幕类      |

直播间发送弹幕

**Returns:** API 调用返回结果

---

## class LiveDanmaku

**Extends:** bilibili_api.utils.AsyncEvent.AsyncEvent

Websocket 实时获取直播弹幕

**Events：**

+ DANMU_MSG: 用户发送弹幕
+ SEND_GIFT: 礼物
+ COMBO_SEND：礼物连击
+ GUARD_BUY：续费大航海
+ SUPER_CHAT_MESSAGE：醒目留言（SC）
+ SUPER_CHAT_MESSAGE_JPN：醒目留言（带日语翻译？）
+ WELCOME: 老爷进入房间
+ WELCOME_GUARD: 房管进入房间
+ NOTICE_MSG: 系统通知（全频道广播之类的）
+ PREPARING: 直播准备中
+ LIVE: 直播开始
+ ROOM_REAL_TIME_MESSAGE_UPDATE: 粉丝数等更新
+ ENTRY_EFFECT: 进场特效
+ ROOM_RANK: 房间排名更新
+ INTERACT_WORD: 用户进入直播间
+ ACTIVITY_BANNER_UPDATE_V2: 好像是房间名旁边那个xx小时榜
+ 本模块自定义事件：
+ VIEW: 直播间人气更新
+ ALL: 所有事件
+ DISCONNECT: 断开连接（传入连接状态码参数）

### Attributes

| name            | type           | description |
| --------------- | -------------- | ----------- |
| room_display_id | int            | 房间展示 ID |
| logger          | logging.Logger | 日志记录    |
| credential      | Credential     | 凭据        |

### Functions

#### def \_\_init\_\_()

| name            | type                 | description                                    |
| --------------- | -------------------- | ---------------------------------------------- |
| room_display_id | int                  | 房间展示 ID                                    |
| debug           | bool, optional       | 调试模式，将输出更多信息。. Defaults to False. |
| credential      | Credential, optional | 凭据. Defaults to None.                        |

#### def get_status()

获取连接状态

**Returns:** int: 0 初始化，1 连接建立中，2 已连接，3 断开连接中，4 已断开，5 错误

#### async def connect()

连接直播间

**Returns:** None

#### async def disconnect()

断开连接

**Returns:** None

---

## async def get_self_info()

| name       | type       | description |
| ---------- | ---------- | ----------- |
| credential | Credential | 凭据        |

获取自己直播等级、排行等信息

**Returns:** API 调用返回结果

---

