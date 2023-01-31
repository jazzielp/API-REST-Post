// Archivo donde estan los servicios que se conectan a la base de datos

class UserServices {
  async find () {
    return 'Find from service'
  }

  async findOne (id) {
    return 'FindOne from service'
  }

  async create (data) {
    return 'Create from service'
  }

  async update (id, data) {
    return 'Update from service'
  }

  async delete (id) {
    return 'Delete from service'
  }
}

module.exports = UserServices
