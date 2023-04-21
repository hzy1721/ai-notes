# 模型

继承 `torch.nn.Module`，实现 2 个方法：

- `__init__`：构造函数，定义模型的各个模块
- `forward`：推理函数，处理输入数据 `x`，返回结果

```py
from torch import nn

class CustomModel(nn.Module):
  def __init__(self):
    super().__init__()
    self.linear = nn.Linear(512, 10)

  def forward(self, x):
    x = self.linear(x)
    return x
```
