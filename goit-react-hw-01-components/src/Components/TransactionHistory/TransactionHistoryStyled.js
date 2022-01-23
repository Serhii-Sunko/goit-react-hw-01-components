import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  overflow: hidden;
  border: 1px solid #d3d3d3;
  background: #fefefe;
  width: 70%;
  margin: 5% auto 0;
  -moz-border-radius: 5px; /* FF1+ */
  -webkit-border-radius: 5px; /* Saf3-4 */
  border-radius: 5px;
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  th,
  td {
    padding: 18px 28px 18px;
    text-align: center;
  }
  th {
    padding-top: 22px;
    text-shadow: 1px 1px 1px #fff;
    background: #e8eaeb;
  }
  td {
    border-top: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
  }
  tr.odd-row td {
    background: #f6f6f6;
  }
  td.first,
  th.first {
    text-align: left;
  }
  td.last {
    border-right: none;
  }
  td {
    background: -moz-linear-gradient(100% 25% 90deg, #fefefe, #f9f9f9);
    background: -webkit-gradient(linear, 0% 0%, 0% 25%, from(#f9f9f9), to(#fefefe));
  }
  tr.odd-row td {
    background: -moz-linear-gradient(100% 25% 90deg, #f6f6f6, #f1f1f1);
    background: -webkit-gradient(linear, 0% 0%, 0% 25%, from(#f1f1f1), to(#f6f6f6));
  }
  th {
    background: -moz-linear-gradient(100% 20% 90deg, #e8eaeb, #ededed);
    background: -webkit-gradient(linear, 0% 0%, 0% 20%, from(#ededed), to(#e8eaeb));
  }
  tr:first-child th.first {
    -moz-border-radius-topleft: 5px;
    -webkit-border-top-left-radius: 5px; /* Saf3-4 */
  }
  tr:first-child th.last {
    -moz-border-radius-topright: 5px;
    -webkit-border-top-right-radius: 5px; /* Saf3-4 */
  }
  tr:last-child td.first {
    -moz-border-radius-bottomleft: 5px;
    -webkit-border-bottom-left-radius: 5px; /* Saf3-4 */
  }
  tr:last-child td.last {
    -moz-border-radius-bottomright: 5px;
    -webkit-border-bottom-right-radius: 5px; /* Saf3-4 */
  }
`;