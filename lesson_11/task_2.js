function getWeatherDescription(weatherCode, weatherDecode) {
    switch (weatherCode) {
        case 'SQ':
            return weatherDecode('SQ') || 'Шквал';
        case 'PO':
            return weatherDecode('PO') || 'Пыльный вихрь';
        case 'FC':
            return weatherDecode('FC') || 'Торнадо';
        case 'BR':
            return weatherDecode('BR') || 'Дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return weatherDecode('HZ') || 'Мгла (видимость менее 10 км)';
        case 'FU':
            return weatherDecode('FU') || 'Дым (видимость менее 10 км)';
        case 'DS':
            return weatherDecode('DS') || 'Пыльная буря (видимость менее 10 км)';
        case 'SS':
            return weatherDecode('SS') || 'Песчаная буря (видимость менее 10 км)';
        default:
            return 'Погода не определена';
    }
}

function weatherDecoder(weatherCode) {
    const weatherDescriptions = {
        SQ: 'Шквал',
        PO: 'Пыльный вихрь',
        FC: 'Торнадо',
        BR: 'Дымка (видимость от 1 до 9 км)',
        HZ: 'Мгла (видимость менее 10 км)',
        FU: 'Дым (видимость менее 10 км)',
        DS: 'Пыльная буря (видимость менее 10 км)',
        SS: 'Песчаная буря (видимость менее 10 км)',
    };
    return weatherDescriptions[weatherCode];
}

const weatherCode = 'HZ';
const weatherDescription = getWeatherDescription(weatherCode, weatherDecoder);

console.log(weatherDescription);