const fs = require('fs')
const path = require('path')
const util = require('util')
const staticPath = path.resolve(__dirname, '../public')
const getData = util.promisify(fs.readFile)
const writeData = util.promisify(fs.writeFile)

const getJson = async () => {
  try {
    let result = await getData(path.join(staticPath,'./data1.json'))
    if(result){
      result = JSON.parse(result.toString())
    } else {
      console.log('请求失败')
    }
    return result
  } catch (error) {
    console.log(error)
  }
}

const changeJson = async (id, params) => {
  try {
    const result = await getJson();
    for (let i = 0; i < result.data.length; i++) {
      if (id === result.data[i].id) {
        for (let key in params) {
          if (result.data[i][key]) {
            result.data[i][key] = params[key]
          }
        }
      }
    }
    result.total = result.data.length;
    let str = JSON.stringify(result)
    await writeData(path.join(staticPath, './data1.json'),str)   
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = {changeJson,getJson}