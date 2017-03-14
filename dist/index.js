'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hapi = require('hapi');

var server = new _hapi.Server();

var port = process.env.PORT || 3000;

var env = process.env.NODE_ENV || 'development';

server.connection({
  port: port, router: {
    isCaseSensitive: false
  },
  routes: {
    cors: true
  }
});

;
server.register([require('inert'), require('vision'), require('blipp'), require('tv'), require('hapi-async-handler'), {
  register: require('good'),
  options: {
    ops: {
      interval: 5000
    },
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          log: '*',
          response: '*', request: '*', error: '*'
        }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
}, {
  register: require('hapi-swagger'),
  options: {
    cors: true,
    jsonEditor: true,
    documentationPath: '/',
    info: {
      title: 'Example',
      version: '1.0.0',
      description: 'An example api'
    }
  }
}], function (err) {
  if (err) throw err;

  if (env !== 'testing') {
    server.start(function (err) {
      if (err) throw err;
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  }
});

exports.default = server;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJOT0RFX0VOViIsImNvbm5lY3Rpb24iLCJyb3V0ZXIiLCJpc0Nhc2VTZW5zaXRpdmUiLCJyb3V0ZXMiLCJjb3JzIiwicmVnaXN0ZXIiLCJyZXF1aXJlIiwib3B0aW9ucyIsIm9wcyIsImludGVydmFsIiwicmVwb3J0ZXJzIiwiY29uc29sZSIsIm1vZHVsZSIsIm5hbWUiLCJhcmdzIiwibG9nIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiZXJyb3IiLCJqc29uRWRpdG9yIiwiZG9jdW1lbnRhdGlvblBhdGgiLCJpbmZvIiwidGl0bGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJlcnIiLCJzdGFydCIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxrQkFBZjs7QUFFQSxJQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7O0FBRUEsSUFBTUQsTUFBTUQsUUFBUUMsR0FBUixDQUFZRSxRQUFaLElBQXdCLGFBQXBDOztBQUVBTCxPQUFPTSxVQUFQLENBQWtCO0FBQ2hCTCxZQURnQixFQUNWTSxRQUFRO0FBQ1pDLHFCQUFpQjtBQURMLEdBREU7QUFJaEJDLFVBQVE7QUFDTkMsVUFBTTtBQURBO0FBSlEsQ0FBbEI7O0FBU0E7QUFDQVYsT0FBT1csUUFBUCxDQUFnQixDQUNkQyxRQUFRLE9BQVIsQ0FEYyxFQUVkQSxRQUFRLFFBQVIsQ0FGYyxFQUdkQSxRQUFRLE9BQVIsQ0FIYyxFQUlkQSxRQUFRLElBQVIsQ0FKYyxFQUtkQSxRQUFRLG9CQUFSLENBTGMsRUFNZDtBQUNFRCxZQUFVQyxRQUFRLE1BQVIsQ0FEWjtBQUVFQyxXQUFTO0FBQ1BDLFNBQUs7QUFDSEMsZ0JBQVU7QUFEUCxLQURFO0FBSVBDLGVBQVc7QUFDVEMsZUFBUyxDQUNQO0FBQ0VDLGdCQUFRLGNBRFY7QUFFRUMsY0FBTSxTQUZSO0FBR0VDLGNBQU0sQ0FBQztBQUNMQyxlQUFLLEdBREE7QUFFTEMsb0JBQVUsR0FGTCxFQUVVQyxTQUFTLEdBRm5CLEVBRXdCQyxPQUFPO0FBRi9CLFNBQUQ7QUFIUixPQURPLEVBU1A7QUFDRU4sZ0JBQVE7QUFEVixPQVRPLEVBV0osUUFYSTtBQURBO0FBSko7QUFGWCxDQU5jLEVBNEJkO0FBQ0VQLFlBQVVDLFFBQVEsY0FBUixDQURaO0FBRUVDLFdBQVM7QUFDUEgsVUFBTSxJQURDO0FBRVBlLGdCQUFZLElBRkw7QUFHUEMsdUJBQW1CLEdBSFo7QUFJUEMsVUFBTTtBQUNKQyxhQUFPLFNBREg7QUFFSkMsZUFBUyxPQUZMO0FBR0pDLG1CQUFhO0FBSFQ7QUFKQztBQUZYLENBNUJjLENBQWhCLEVBeUNHLGVBQU87QUFDUixNQUFJQyxHQUFKLEVBQVMsTUFBTUEsR0FBTjs7QUFFVCxNQUFJNUIsUUFBUSxTQUFaLEVBQXVCO0FBQ3JCSCxXQUFPZ0MsS0FBUCxDQUFhLGVBQU87QUFDbEIsVUFBSUQsR0FBSixFQUFTLE1BQU1BLEdBQU47QUFDVC9CLGFBQU9xQixHQUFQLENBQVcsTUFBWCxFQUFtQix3QkFBd0JyQixPQUFPMkIsSUFBUCxDQUFZTSxHQUF2RDtBQUNELEtBSEQ7QUFJRDtBQUVGLENBbkREOztrQkFzRGVqQyxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnaGFwaSc7XG5cbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50Jztcblxuc2VydmVyLmNvbm5lY3Rpb24oe1xuICBwb3J0LCByb3V0ZXI6IHtcbiAgICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlXG4gIH0sXG4gIHJvdXRlczoge1xuICAgIGNvcnM6IHRydWVcbiAgfVxufSk7XG5cbjtcbnNlcnZlci5yZWdpc3RlcihbXG4gIHJlcXVpcmUoJ2luZXJ0JyksXG4gIHJlcXVpcmUoJ3Zpc2lvbicpLFxuICByZXF1aXJlKCdibGlwcCcpLFxuICByZXF1aXJlKCd0dicpLFxuICByZXF1aXJlKCdoYXBpLWFzeW5jLWhhbmRsZXInKSxcbiAge1xuICAgIHJlZ2lzdGVyOiByZXF1aXJlKCdnb29kJyksXG4gICAgb3B0aW9uczoge1xuICAgICAgb3BzOiB7XG4gICAgICAgIGludGVydmFsOiA1MDAwXG4gICAgICB9LFxuICAgICAgcmVwb3J0ZXJzOiB7XG4gICAgICAgIGNvbnNvbGU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2R1bGU6ICdnb29kLXNxdWVlemUnLFxuICAgICAgICAgICAgbmFtZTogJ1NxdWVlemUnLFxuICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgbG9nOiAnKicsXG4gICAgICAgICAgICAgIHJlc3BvbnNlOiAnKicsIHJlcXVlc3Q6ICcqJywgZXJyb3I6ICcqJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vZHVsZTogJ2dvb2QtY29uc29sZSdcbiAgICAgICAgICB9LCAnc3Rkb3V0J11cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICByZWdpc3RlcjogcmVxdWlyZSgnaGFwaS1zd2FnZ2VyJyksXG4gICAgb3B0aW9uczoge1xuICAgICAgY29yczogdHJ1ZSxcbiAgICAgIGpzb25FZGl0b3I6IHRydWUsXG4gICAgICBkb2N1bWVudGF0aW9uUGF0aDogJy8nLFxuICAgICAgaW5mbzoge1xuICAgICAgICB0aXRsZTogJ0V4YW1wbGUnLFxuICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgYXBpJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXSwgZXJyID0+IHtcbiAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gIGlmIChlbnYgIT09ICd0ZXN0aW5nJykge1xuICAgIHNlcnZlci5zdGFydChlcnIgPT4ge1xuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgc2VydmVyLmxvZygnaW5mbycsICdTZXJ2ZXIgcnVubmluZyBhdDogJyArIHNlcnZlci5pbmZvLnVyaSk7XG4gICAgfSk7XG4gIH1cblxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIl19