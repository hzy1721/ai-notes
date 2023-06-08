# 交通预测

|          | 宏观                | 中观      | 微观 |
| -------- | ------------------- | --------- | ---- |
| 研究对象 | 流量/流速/密度/拥堵 | 节点/队列 | 轨迹 |

## 宏观：交通流预测

主流模型：时空图神经网络

### 空间依赖建模

- Diffusion Conv (DCRNN)
- Graph Conv (STGCN, ASTGCN, MTGNN)
- Spatial Att (ASTGCN)

### 时间依赖建模

- GRU (DCRNN)
- Gated Temporal Conv (STGCN)
- Concat Temporal Conv (ASTGCN, MTGNN)
- Temporal Att (ASTGCN)
- 输入不同周期的历史数据 (ASTGCN)
  - daily-periodic
  - weekly-periodic

### Baselines

- 经典时序预测模型
  - HA
  - ARIMA
  - VAR
- RNN 模型
  - LSTM
  - GRU
- STGNN 模型
  - DCRNN
  - STGCN

### 评价指标

| 评价指标    | 全称                           | 含义                                 |
| ----------- | ------------------------------ | ------------------------------------ |
| MAE         | Mean Absolute Error            | 差的绝对值，求和取平均               |
| masked MAE  |                                | 不考虑值为 0 的 loss                 |
| RMSE        | Root Mean Squared Error        | 差的平方，求和取平均开根号           |
| masked RMSE |                                | 不考虑值为 0 的 loss                 |
| MSE         | Mean Squared Error             | 不开根号                             |
| MAPE        | Mean Absolute Percentage Error | 差的绝对值与真实值的比值，求和取平均 |
| masked MAPE |                                | 不考虑值为 0 的 loss                 |
| WMAPE       | Weighted MAPE                  | 差的和除以真实值的和                 |
