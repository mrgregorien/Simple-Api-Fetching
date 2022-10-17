
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
            document.body.appendChild(domCreation({ ip: res.data.ip, country: res.data.country, city: res.data.city, region: res.data.region, timezone: res.data.timezone, zip: res.data.postal, coordinates: res.data.loc }));
        })
        .catch(err => {
            console.log(err);
        })
}

function domCreation({ ip, country, city, region, timezone, zip, coordinates }) {
    const container = document.createElement('div');

    const headingTag = document.createElement('h1');

    const countryTag = document.createElement('p');
    const cityTag = document.createElement('p');
    const regionTag = document.createElement('p');
    const timeZoneTag = document.createElement('p');
    const zipTag = document.createElement('p');
    const coordinatesTag = document.createElement('p');
    //Data Content
    headingTag.textContent = `You Current IP: ${ip}`;
    countryTag.textContent = `Country: ${country}`;
    cityTag.textContent = `City: ${city}`;
    regionTag.textContent = `Region: ${region}`;
    timeZoneTag.textContent = `Time Zone: ${timezone}`;
    zipTag.textContent = `Zip Code: ${zip}`;
    coordinatesTag.textContent = `Coordinates: ${coordinates}`;
    //Classes
    container.classList.add('container');

    //DOM 
    container.append(headingTag, countryTag, cityTag, regionTag, timeZoneTag, zipTag, coordinatesTag);
    return container
}




