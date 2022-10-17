
//Get current IP address
//>> https://api.ipify.org?format=json

function getMyIp(url) {
    axios.get(url)
        .then(res => {
            const myIp = res.data.ip;
            document.title = `IP: ${myIp}`
            getIpInformation(myIp);
        })
        .catch(err => {
            console.log(err)
        });
}

const currentIp = 'https://api.ipify.org?format=json'
getMyIp(currentIp)

//Get Information about specific IP address | geological info, company, and carrier name
//URL = https://ipinfo.io//geo

function getIpInformation(ip) {
    axios.get(`https://ipinfo.io/${ip}/geo`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

function domCreation() {
    const container = document.createElement('div');
    const entryPoint = document.createElement('div');

}



