function SaveOnLocalStorage(toBeSaved) {
     const saveIt = (i) => localStorage.setItem(i, toBeSaved[i]);

     saveIt('email');
     saveIt('password');
}

export default SaveOnLocalStorage;