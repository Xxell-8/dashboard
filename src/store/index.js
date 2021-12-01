import { createStore } from 'vuex'
import router from '@/router'

const store = createStore({
  state: {
    data: null,
    fileName: null,
    board: 0,
    regionCode: {
      'Maryland': 'MD',
      'South Dakota': 'SD',
      'Texas': 'TX',
      'Massachusetts': 'MA',
      'Pennsylvania': 'PA',
      'Georgia': 'GA',
      'Arizona': 'AZ',
      'South Carolina': 'SC',
      'Alabama': 'AL',
      'California': 'CA',
      'Oregon': 'OR',
      'New Mexico': 'NM',
      'Virginia': 'VA',
      'Louisiana': 'LA',
      'Minnesota': 'MN',
      'Illinois': 'IL',
      'Michigan': 'MI',
      'Florida': 'FL',
      'Iowa': 'IA',
      'Utah': 'UT',
      'Ohio': 'OH',
      'New York': 'NY',
      'Alaska': 'AK',
      'Connecticut': 'CT',
      'North Carolina': 'NC',
      'Wisconsin': 'WI',
      'Colorado': 'CO',
      'Missouri': 'MO',
      'Maine': 'ME',
      'Indiana': 'IN',
      'West Virginia': 'WV',
      'Kentucky': 'KY',
      'New Hampshire': 'NH',
      'Nebraska': 'NE',
      'Washington': 'WA',
      'Montana': 'MT',
      'North Dakota': 'ND',
      'Idaho': 'ID',
      'Delaware': 'DE',
      'Tennessee': 'TN',
      'New Jersey': 'NJ',
      'Oklahoma': 'OK',
      'Arkansas': 'AR',
      'Nevada': 'NV',
      'Wyoming': 'WY',
      'District of Columbia': 'DC',
      'Mississippi': 'MS',
      'Kansas': 'KS',
      'Hawaii': 'HI',
      'Rhode Island': 'RI',
      'Vermont': 'VT',

    },
    regionId: null,
    month: null,
    discountY: 'ProfitRatio'
  },
  mutations: {
    SET_DATA (state, payload) {
      state.data = payload
    },
    SET_FILE_NAME (state, payload) {
      state.fileName = payload
    },
    SET_BOARD (state, payload) {
      state.board = payload
    },
    SET_DISCOUNT_Y (state, payload) {
      state.discountY = payload
    },
    SET_REGION_ID (state, payload) {
      state.regionId = payload
    },
    SET_MONTH (state, payload) {
      if (state.month === payload) {
        state.month = null
      } else {
        state.month = payload
      }
    },
  },
  actions: {
    csv2Array ({ dispatch }, csv) {
      if (csv) {
        const strData = csv.trim()
        // 참고: https://gist.github.com/Jezternz/c8e9fafc2c114e079829974e3764db75/revisions
        var objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\"\\,\\r\\n]*))"), "gi")
        var arrData = [[]];
        var arrMatches = null;
  
        while ((arrMatches = objPattern.exec(strData))) {
          if (arrMatches[1].length && (arrMatches[1] != ',')) {
            arrData.push([]);
            }
            if (arrMatches[2]) {
              var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
            } else {
              strMatchedValue = arrMatches[3];
            }
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        dispatch('csv2Json', arrData)
      }
    },
    tsv2Array({ commit }, csv) {
      if (csv) {
        const lines = csv.trim().split('\n')
        const header = lines[0].split('\t').map(key => key.replace(' ', '').trim())
        const output = lines.slice(1).map((line) => {
          const fields = line.split('\t').map(key => key.trim())
          return Object.fromEntries(header.map((h, i) => {
            let val = fields[i]
            if (h === 'Profit' || h === 'Sales' || h === 'ProfitRatio') {
              if (h === 'Profit' && val.startsWith('(')) {
                val = '-' + val
              }
              val = val.replace(/[()$%,]/g, '')
            }
            if (!isNaN(val)) {
              val = Number(val)
            }
            if (h.includes('Date')) {
              val = val.split('.').map(date => date.trim()).slice(0, -1)
            }
            return [h, val]
          }))
        })
        commit('SET_DATA', output)
        router.push({ name: 'Dashboard'})
      }
    },
    csv2Json({ commit }, arrData) {
      const header = arrData[0].map(h => h.replace(' ', ''))
      const output = arrData.slice(1).map(line => {
        return Object.fromEntries(header.map((h, i) => {
          let val = line[i]
          if (h === 'Profit' || h === 'Sales' || h === 'ProfitRatio') {
            if (h === 'Profit' && val.startsWith('(')) {
              val = '-' + val
            }
            val = val.replace(/[()$%,]/g, '')
          }
          if (!isNaN(val)) {
            val = Number(val)
          }
          if (h.includes('Date')) {
            val = val.split('.').map(date => date.trim()).slice(0, -1)
          }
          return [h, val]
        }))
      })
      commit('SET_DATA', output)
      router.push({ name: 'Dashboard'})
    },
  },
  getters: {
    categoryData (state) {
      const result = []
      state.data.forEach(line => {
        let category = line.Category
        let isAdd = false
        for (let i = 0; i < result.length; i++) {
          if (result[i].name === category) {
            result[i].profit += line.Profit
            result[i].order++
            isAdd = true
            break
          }
        }
        if (!isAdd) {
          result.push({
            'name': category,
            'profit': line.Profit,
            'order': 1
          })
        }
      })
      return result
    },
    segmentData (state) {
      const result = []
      state.data.forEach(line => {
        let segment = line.Segment
        let isAdd = false
        for (let i = 0; i < result.length; i++) {
          if (result[i].name === segment) {
            result[i].profit += line.Profit
            result[i].order++
            isAdd = true
            break
          }
        }
        if (!isAdd) {
          result.push({
            'name': segment,
            'profit': line.Profit,
            'order': 1
          })
        }
      })
      return result
    },
    periodData (state) {
      const result = []
      state.data.forEach(line => {
        let date = line.OrderDate[0]+'-'+line.OrderDate[1].padStart(2, '0')
        let isAdd = false
        for (let i = 0; i < result.length; i++) {
          if (result[i].month === date) {
            result[i].profit += line.Profit
            result[i].sales += line.Sales
            result[i].rate = Math.ceil(result[i].profit / result[i].sales * 100)
            // 지역별 카테고리 데이터
            let insertCategory = false
            for (let j = 0; j < result[i].category.length; j++) {
              if (result[i].category[j].name === line.Category) {
                result[i].category[j].profit += line.Profit
                result[i].category[j].order++
                insertCategory = true
                break
              }
            }
            if (!insertCategory) {
              result[i].category.push({
                'name': line.Category,
                'profit': line.Profit,
                'order': 1
              })
            }
            // 지역별 세그먼트 데이터
            let insertSegment = false
            for (let j = 0; j < result[i].segment.length; j++) {
              if (result[i].segment[j].name === line.Segment) {
                result[i].segment[j].customer.add(line.CustomerID)
                result[i].segment[j].cnt = result[i].segment[j].customer.size
                result[i].segment[j].profit += line.Profit
                result[i].segment[j].order++
                insertSegment = true
                break
              }
            }
            if (!insertSegment) {
              let customer = new Set()
              customer.add(line.CustomerID)
              result[i].segment.push({
                'name': line.Segment,
                'customer': customer,
                'cnt': customer.size,
                'profit': line.Profit,
                'order': 1
              })
            }
            isAdd = true
            break
          }
        }
        if (!isAdd) {
          let customer = new Set()
          customer.add(line.CustomerID)
          result.push({
            'month': date,
            'profit': line.Profit,
            'sales': line.Sales,
            'rate': line.ProfitRatio,
            'segment': [
              {
                name: line.Segment,
                customer: customer,
                cnt: customer.size,
                profit: line.Profit,
                order: 1,
              }
            ],
            'category': [
              {
                name: line.Category,
                profit: line.Profit,
                order: 1,
              }
            ]
          })
        }
      })
      result.sort((a, b) => {
        if (a.month > b.month) {
          return 1;
        }
        if (a.month < b.month) {
          return -1;
        }
        return 0;
      })
      return result
    },
    regionData (state) {
      const result = []
      state.data.forEach(line => {
        if (line.Country === 'United States') {
          let region = line.State
          let isAdd = false
          for (let i = 0; i < result.length; i++) {
            if (result[i].name === region) {
              result[i].profit += line.Profit
              result[i].sales += line.Sales
              result[i].order++
              // 지역별 카테고리 데이터
              let insertCategory = false
              for (let j = 0; j < result[i].category.length; j++) {
                if (result[i].category[j].name === line.Category) {
                  result[i].category[j].profit += line.Profit
                  result[i].category[j].order++
                  insertCategory = true
                  break
                }
              }
              if (!insertCategory) {
                result[i].category.push({
                  'name': line.Category,
                  'profit': line.Profit,
                  'order': 1
                })
              }
              // 지역별 세그먼트 데이터
              let insertSegment = false
              for (let j = 0; j < result[i].segment.length; j++) {
                if (result[i].segment[j].name === line.Segment) {
                  result[i].segment[j].customer.add(line.CustomerID)
                  result[i].segment[j].cnt = result[i].segment[j].customer.size
                  result[i].segment[j].profit += line.Profit
                  result[i].segment[j].order++
                  insertSegment = true
                  break
                }
              }
              if (!insertSegment) {
                let customer = new Set()
                customer.add(line.CustomerID)
                result[i].segment.push({
                  'name': line.Segment,
                  'customer': customer,
                  'cnt': customer.size,
                  'profit': line.Profit,
                  'order': 1
                })
              }
              isAdd = true
              break
            }
          }
          if (!isAdd) {
            let customer = new Set()
            customer.add(line.CustomerID)
            result.push(
              {
                'id': 'US-' + state.regionCode[region],
                'name': region,
                'profit': line.Profit,
                'sales': line.Sales,
                'order': 1,
                'segment': [
                  {
                    name: line.Segment,
                    customer: customer,
                    cnt: customer.size,
                    profit: line.Profit,
                    order: 1,
                  }
                ],
                'category': [
                  {
                    name: line.Category,
                    profit: line.Profit,
                    order: 1,
                  }
                ]
              }
            )
          }
        }
      })
      return result
    },
    saleData (state) {
      return state.data.map(line => {
        let color
        if (line.Category === 'Office Supplies') {
          color = '#DC6967'
        } else if (line.Category === 'Furniture') {
          color = '#A367DC'
        } else {
          color = '#67B7DC'
        }
        
        return {
          category: line.Category,
          subCategory: line['Sub-Category'],
          date: line.OrderDate[0] + '-' + line.OrderDate[1].trim() + '-' + line.OrderDate[2].trim(),
          color: color,
          x: line.Discount * 100,
          y: line[state.discountY],
          value: 1,
          profit: line.Profit,
          profitRatio: line.ProfitRatio,
          sales: line.Sales,
        }
      })
    },
  },
})

export default store