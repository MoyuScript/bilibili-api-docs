# 示例：获取视频信息并点赞

```python
import asyncio
from bilibili_api import video, Credential

SESSDATA = ""
BILI_JCT = ""
BUVID3 = ""

async def main():
    # 实例化 Credential 类
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    # 实例化 Video 类
    v = video.Video(bvid="BVxxxxxxxx", credential=credential)
    # 获取视频信息
    info = await v.get_info()
    # 打印视频信息
    print(info)
    # 给视频点赞
    await v.like(True)

if __name__ == '__main__':
    # 主入口
    asyncio.get_event_loop().run_until_complete(main())
```

# 示例：上传视频

```python
import os
import asyncio
from bilibili_api import video, Credential


SESSDATA = ""
BILI_JCT = ""
BUVID3 = ""

credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)

async def main():
  # 视频文件路径
  video_path = "page1.mp4"
  # 封面图片路径
  cover_path = "cover.jpg"

  # 获取文件名和后缀
  filename, ext = os.path.basename(video_path).split(".")

  # 实例化 P1 对象
  p1 = video.VideoUploaderPageObject(video_stream=open(video_path, "rb"), title=filename, video_format=ext)

  # 视频上传配置
  config = {
    "copyright": 1, #"1 自制，2 转载。",
    "source": "", #"str, 视频来源。投稿类型为转载时注明来源，为原创时为空。",
    "desc": "", #"str, 视频简介。",
    "desc_format_id": 0,
    "dynamic": "", #"str, 动态信息。",
    "interactive": 0,
    "open_elec": 0, #"int, 是否展示充电信息。1 为是，0 为否。",
    "no_reprint": 1, #"int, 显示未经作者授权禁止转载，仅当为原创视频时有效。1 为启用，0 为关闭。",
    "subtitles": {
      "lan": "", #"字幕语言，不清楚作用请将该项设置为空",
      "open": 0
    },
    "tag": "学习,测试", #"str, 视频标签。使用英文半角逗号分隔的标签组。示例：标签1,标签2,标签3",
    "tid": 208, #"int, 分区ID。可以使用 channel 模块进行查询。",
    "title": "测试视频", #"视频标题",
    "up_close_danmaku": False, #"bool, 是否关闭弹幕。",
    "up_close_reply": False, #"bool, 是否关闭评论。",
  }

  # 要上传的所有分 P 列表
  pages = [p1]

  # 初始化上传
  uploader = video.VideoUploader(cover=open(cover_path, 'rb'), cover_type="jpg", pages=pages, config=config, credential=credential)

  # 开始上传
  res = await uploader.start()

  # 打印结果（返回的为 bv 号和 av 号）
  print(res)

if __name__ == '__main__':
  # 主入口
  asyncio.get_event_loop().run_until_complete(main())
```

# 示例：视频在线人数监测

```python
from bilibili_api import video
import asyncio

# 实例化
v = video.VideoOnlineMonitor(bvid="BV1AV411x7Gs")

@v.on('ONLINE')
async def on_online_update(event):
    """
    在线人数更新
    """
    print(event)


@v.on('DANMAKU')
async def on_danmaku(event):
    """
    收到实时弹幕
    """
    print(event)

if __name__ == '__main__':
    # 主入口，v.connect() 为连接服务器
    asyncio.get_event_loop().run_until_complete(v.connect())
```

