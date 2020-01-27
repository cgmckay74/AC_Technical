import moment from 'moment'

const getStartDate = (date) => moment(date).add(1, "month").date(1).format("MMM Do YYYY");

export default getStartDate