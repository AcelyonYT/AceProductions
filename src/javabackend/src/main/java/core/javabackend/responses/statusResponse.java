package core.javabackend.responses;

public class statusResponse {
    private String message;

    public statusResponse(String message){
        this.message = message;
    }

    public String getResponse(){
        return this.message;
    }
}
