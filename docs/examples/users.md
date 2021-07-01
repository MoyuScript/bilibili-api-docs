# 示例：获取用户粉丝数

```python
from bilibili_api import user, sync

u = user.User(660303135)

print(sync(u.get_relation_info())["follower"])
```

# 示例：获取用户所有动态

```python
import json
from bilibili_api import user, sync

# 实例化
u = user.User(660303135)

async def main():
  	# 用于记录下一次起点
    offset = 0
    
    # 用于存储所有动态
    dynamics = []

    # 无限循环，直到 has_more != 1
    while True:
      	# 获取该页动态
        page = await u.get_dynamics(offset)
        
        if 'cards' in page:
          	# 若存在 cards 字段（即动态数据），则将该字段列表扩展到 dynamics
            dynamics.extend(page['cards'])
		
        if page['has_more'] != 1:
        		# 如果没有更多动态，跳出循环
            break
				
        # 设置 offset，用于下一轮循环
        offset = page['next_offset']

    # 打印动态数量
    print(f"共有 {len(dynamics)} 条动态")

# 入口
sync(main())
```

