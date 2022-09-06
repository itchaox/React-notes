/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-09-06 15:23:31
 * @LastEditors: wc
 * @LastEditTime: 2022-09-06 17:44:20
 */
import styled from "styled-components"

export const AppStyle = styled.div`
  .header {
    color: ${({ color }) => color};
    font-size: 20px;
  }

  .footer {
    color: green;
    font-size: 50px;
  }
`
