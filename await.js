import axios from 'axios'
async function getCovidData(){
    try{
        const response = await axios.get('https://api.covid19api.com/summary')
        console.log(response.data.Countries);
        console.log('so nguoi moi nhiem',response.data.Global.NewConfirmed);
        console.log('so nguoi chet moi', response.data.Global.NewDeaths)
        console.log('tong so nguoi chet', response.data.Global.TotalDeaths)
        console.log('quoc gia co tong so nguoi chet nhieu nhat:', response.data.Countries[0].Country, response.data.Countries[0].TotalDeaths,'nguoi');
        console.log('quoc gia co so nguoi moi mac trong ngay nhieu nhat:', response.data.Countries[0].Country, response.data.Countries[0].NewConfirmed,'nguoi')
    } catch(error){
        console.log(error)
    }
}
function loadData(){
    console.log('dang lay du lieu vui long cho')
    
}
function finishLoadData(){
    console.log('lay du lieu thanh dang xuat thong ke')

}
function infomation(){
    console.log('thong tin covid hom nay:')
}
async function main(){
    await loadData();
    await finishLoadData();
    await infomation();
    await getCovidData();    
}
main()
