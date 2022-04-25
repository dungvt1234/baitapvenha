
import axios from 'axios';
 function getCovidData(){
    return new Promise(function(resolve, reject){
        const response = axios.get('https://api.covid19api.com/summary');
        console.log(response)
        resolve(response)
    })
}
console.log('...loading data')
getCovidData()
.then(response =>{
    console.log(response.data.Countries)
     console.log('da lay giu lieu thanh cong dang xuat thong ke')
     console.log('du lieu covid hom nay')
     console.log('nhiem moi', response.data.Global.NewConfirmed)
    console.log('so nguoi chet moi', response.data.Global.NewDeaths)
    console.log('tong so nguoi chet', response.data.Global.TotalDeaths)
    console.log('quoc gia co tong so nguoi chet nhieu nhat:', response.data.Countries[0].Country, response.data.Countries[0].TotalDeaths,'nguoi');
    console.log('quoc gia co so nguoi moi mac trong ngay nhieu nhat:', response.data.Countries[0].Country,response.data.Countries[0].NewConfirmed,'nguoi' )
})
.catch(err =>{
    console.log(err)
    console.log('Loaded covid data fail')
});
