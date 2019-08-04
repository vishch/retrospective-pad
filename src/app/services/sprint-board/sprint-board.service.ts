import { Injectable } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintItemType } from 'src/app/models/enums';

@Injectable({
    providedIn: 'root'
})
export class SprintBoardService {

    sprintItems: SprintItem[] = [
        {
            id: 1,
            createdBy: 1,
            createdOn: new Date(),
            itemText: 'some thing good',
            itemType: SprintItemType.WentWell
        },
        {
            id: 2,
            createdBy: 1,
            createdOn: new Date(),
            itemText: 'some another thing happened',
            itemType: SprintItemType.WentWell
        },
        {
            id: 3,
            createdBy: 1,
            createdOn: new Date(),
            itemText: 'that was so hell of a sprint',
            itemType: SprintItemType.WentWell
        }
    ];

    addItem(sprintItem: SprintItem): void {
        this.sprintItems.push(sprintItem);
    }

    constructor() { }
}
