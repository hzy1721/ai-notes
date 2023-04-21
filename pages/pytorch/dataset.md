# 数据集

继承 `torch.utils.data.Dataset`，实现 3 个方法：

- `__init__`：构造函数，读取数据文件，存储到变量中
- `__len__`：返回样本总数
- `__getitem__`：返回下标为 `idx` 的一个样本

```py
from torch.utils.data import Dataset

class CustomDataset(Dataset):
  def __init__(self, file):
    super().__init__()
    self.data = read_file(file)

  def __len__(self):
    return len(self.data)

  def __getitem__(self, idx):
    return self.data[idx]
```
