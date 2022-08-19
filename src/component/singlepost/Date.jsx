export const FormateDate = ({secs}) => {

    let Longdate = new Date(1970, 0, 1); 
    Longdate.setUTCSeconds(secs);
    const month = Longdate.toLocaleString('default', { month: 'short' });
    const day = Longdate.getUTCDate();
    const year = Longdate.getUTCFullYear();
    
    return (`${month} ${day}, ${year}`)

}