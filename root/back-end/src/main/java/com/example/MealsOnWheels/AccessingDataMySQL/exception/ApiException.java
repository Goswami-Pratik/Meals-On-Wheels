package com.example.MealsOnWheels.AccessingDataMySQL.exception;

import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

public class ApiException {

    private final String message;
    private final int statusValue;
    private final HttpStatus httpStatus;
    private final ZonedDateTime timestamp;
    private final String path;

    public ApiException(String message, int statusValue,
                        HttpStatus httpStatus,
                        ZonedDateTime timestamp, String path) {
        this.message = message;
        this.statusValue = statusValue;
        this.httpStatus = httpStatus;
        this.timestamp = timestamp;
        this.path = path;
    }

    public String getMessage() {
        return message;
    }

    public int getStatusValue() {
        return statusValue;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public ZonedDateTime getTimestamp() {
        return timestamp;
    }

    public String getPath() {
        return path;
    }
}
