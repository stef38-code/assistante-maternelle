import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
/**
 * Service pour la génèration de UUIDs.
 */
export class UuidService {
  // Génère un UUID unique en tant que chaîne
  generateUuid(): string {
    return uuidv4();
  }
}
