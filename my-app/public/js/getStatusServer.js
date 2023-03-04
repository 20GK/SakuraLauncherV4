const net = require('net')

/**
 * Retrieves the status of a minecraft server.
 * 
 * @param {string} address The server address.
 * @param {number} port Optional. The port of the server. Defaults to 25565.
 * @returns {Promise.<Object>} A promise which resolves to an object containing
 * status information.
 */

const getStatus = (address, port) => {
  if(port == null || port == ''){
      port = 25565
  }
  if(typeof port === 'string'){
      port = parseInt(port)
  }

  return new Promise((resolve) => {
    const socket = net.connect(port, address, () => {
      let buff = Buffer.from([0xFE, 0x01])
      socket.write(buff)
    })

    socket.setTimeout(2500, () => {
      socket.end()
      reject({
          code: 'ETIMEDOUT',
          errno: 'ETIMEDOUT',
          address,
          port
      })
    })

    socket.on('data', () => {
      socket.end();
      resolve(true);
    });

    socket.on('error', (err) => {
      socket.destroy();
      resolve(false)
    });
  });
} 

module.exports = { getStatus }