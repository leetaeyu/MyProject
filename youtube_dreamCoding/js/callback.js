class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'taeyu' && password === 'lee') ||
                (id === 'coder' &&  password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'taeyu') {
                onSuccess({name :'taeyu', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('id를 입력해주세요.');
const password = prompt('password를 입력해주세요');
userStorage.loginUser(id, password, (user) => {
    id,
    password,
    user => {
        userStorage.getRoles(user, )
    },
}, (error) => {

})