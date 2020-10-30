import axiosAPI from 'app/config/axiosAPI'
import localStorageService from './localStorageService'

class AuthService {
  user = {
    userId: '1',
    role: 'ADMIN',
    displayName: 'Watson Joyce',
    email: 'watsonjoyce@gmail.com',
    photoURL: '/assets/images/face-7.jpg',
    age: 25,
    token: 'faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh',
  }

  signupWithEmailAndPassword = (username, email, password) => {
    return new Promise((resolve, reject) => {
      axiosAPI
        .post('/register/automaticEmailAccount', {
          fullname: username,
          email: email,
          password: password,
        })
        .then((response) => {
          let status = response.data.status
          if (status === 'success') {
            resolve(response.data)
          } else {
            reject(status)
          }
        })
        .catch((e) => {
          reject(e)
        })
    }).then((data) => {
      return data
    })
  }

  loginWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      axiosAPI
        .post('/register/login/checkPassword', {
          email: email,
          password: password,
        })
        .then((response) => {
          let status = response.data.status
          if (status === 'success') {
            resolve(response.data)
          } else {
            reject(status)
          }
        })
        .catch((e) => {
          reject(e)
        })
    }).then((data) => {
      console.log('test login')
      console.log(data)
      this.setSession(data.token)
      this.setUser(data)
      return data
    })
  }

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user)
      }, 100)
    }).then((data) => {
      this.setSession(data.token)
      this.setUser(data)
      return data
    })
  }

  logout = () => {
    this.setSession(null)
    this.removeUser()
  }

  setSession = (token) => {
    if (token) {
      localStorage.setItem('access_token', token)
    } else {
      localStorage.removeItem('access_token')
    }
  }
  setUser = (user) => {
    localStorageService.setItem('auth_user', user)
  }
  removeUser = () => {
    localStorage.removeItem('auth_user')
  }
}

export default new AuthService()
