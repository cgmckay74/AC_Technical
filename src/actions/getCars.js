const getCars =() => {
    const url = 'arnoldclark.com/used-cars/search.json?payment_type=monthly&min_price=100&max_price=150';
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/'

    const cars = fetch(cors_api_url + url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

    return cars;
}

export default getCars