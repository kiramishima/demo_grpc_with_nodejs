import messages from './proto/user_pb'
import services from './proto/user_grpc_pb';
import grpc from '@grpc/grpc-js'

function main() {
    const client = new services.UserSvcClient('localhost:8080', grpc.credentials.createInsecure());

    let registerReq = new messages.RegisterRequest();
    registerReq.setName("Hello");
    registerReq.setEmail("hello@world.com");
    registerReq.setPassword("Password");
    client.register(registerReq, function(err, response) {
        console.log(response);
    });
}

main();