import React, { useState } from "react";
import Taro, { atMessage, Config } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { TKillAccounListItem, TOrderStatusMap, TBillTypeMap } from "./type";
import "./index.scss";

const orderStatusMap = {
  0: "待确认",
  1: "待配送",
  2: "待修改",
  3: "待返还"
};
const billTypeMap = {
  0: "中石油昆仑好客订单"
};
type StateType = {
  count: number
  orderList: Array<TKillAccounListItem>
  timeSel: string
};
type propType = {
  [propName: string]: any;
};
interface KillAccountList {
  state: StateType;
  // props:propType
}

const KillAccountList: React.FC<{}> = ({}) => {
  const [data, setData] = useState<StateType>({
    count: 10,
    orderList: [
      {
        billType: 0,
        billNumber: 2352524,
        supplierNumber: 3495739485723,
        supplierName: "测试",
        billDate: "2021-10-23",
        billNum: 24,
        status: 2,
        id: 0
      }
    ],
    timeSel: '2021-06-17'
  });

  const toDetail = item => {
    console.log("去详情", item)
  }

  const preViewPdf = item => {
    console.log("pdf展示", item)
  }
  
  const onTimeChange = (e) => {
    console.log("e",e.detail.value)
    const result = e.detail.value === 3 ? true : false
    setData({
        ...data,
        timeSel: e.detail.value
    })
  }

  const { count, orderList, timeSel } = data;
  return (
    <View className='history-list-page'>
      <View className='order-header'>
        <View className='order-info'>
          {count > 0 ? (
            <View className='info'>
              <Picker mode='date' onChange={onTimeChange}>
                <View className='picker'>
                  当前选择：{timeSel}
                </View>
              </Picker>
              共计<Text className='f-color-primary'>{count}</Text>个订单 待确认
            </View>
          ) : (
            <View className='info'>
              <Text className='f-color-primary'>暂无待确认订单</Text>
            </View>
          )}
        </View>
      </View>
      <View className='list'>
        {orderList.length > 0 &&
          orderList.map(item => {
            return (
              <View
                className='list-card'
                key={item.id}
                onClick={() => toDetail(item)}
              >
                <View className='card-title'>{billTypeMap[item.billType]}</View>
                <View className='card-info'>
                  <View className='info-text'>
                    <View>省采购订单编号：{item.billNumber}</View>
                    <View>配送商编号：{item.supplierNumber}</View>
                    <View>配送商名称：{item.supplierName}</View>
                    <View>订单日期：{item.billDate}</View>
                    <View>订单数量(罐)：{item.billNum}</View>
                  </View>
                  <View className='info-operate'>
                    <View className='info-status'>
                      <Text
                        className='status-icon'
                        style='vertical-align: middle'
                      ></Text>
                      <Text style='line-height: 14rpx'>
                        {orderStatusMap[item.status]}
                      </Text>
                    </View>
                    <View
                      className='info-button'
                      onClick={() => preViewPdf(item)}
                    >
                      预览送货单
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default KillAccountList;
