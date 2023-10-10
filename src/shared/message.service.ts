import {Injectable} from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
  })

export class MessageService {

    constructor(
      private snackBar: MatSnackBar
    ) 
    {}
  
    public message(msg: string, timeout = 5000) {
      this.snackBar.open(msg, 'Close', {
        duration: timeout,
        horizontalPosition: "right",
        verticalPosition: "top",
      })
    }
  }