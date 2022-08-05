

const useDate = (ms) => {
      let a = new Date(ms * 1000);
    let months = [
      "January",
      "February",
      "Marc",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septemper",
      "October",
      "November",
      "December",
    ];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let fullDate = date + " " + month;
    return fullDate;
   
}

export default useDate;