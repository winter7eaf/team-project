import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../item.test-samples';

import { ItemFormService } from './item-form.service';

describe('Item Form Service', () => {
  let service: ItemFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemFormService);
  });

  describe('Service methods', () => {
    describe('createItemFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createItemFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            condition: expect.any(Object),
            image: expect.any(Object),
            postcode: expect.any(Object),
            uploadTime: expect.any(Object),
            givenTime: expect.any(Object),
            state: expect.any(Object),
            giver: expect.any(Object),
            receiver: expect.any(Object),
            tags: expect.any(Object),
          })
        );
      });

      it('passing IItem should create a new form with FormGroup', () => {
        const formGroup = service.createItemFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            condition: expect.any(Object),
            image: expect.any(Object),
            postcode: expect.any(Object),
            uploadTime: expect.any(Object),
            givenTime: expect.any(Object),
            state: expect.any(Object),
            giver: expect.any(Object),
            receiver: expect.any(Object),
            tags: expect.any(Object),
          })
        );
      });
    });

    describe('getItem', () => {
      it('should return NewItem for default Item initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createItemFormGroup(sampleWithNewData);

        const item = service.getItem(formGroup) as any;

        expect(item).toMatchObject(sampleWithNewData);
      });

      it('should return NewItem for empty Item initial value', () => {
        const formGroup = service.createItemFormGroup();

        const item = service.getItem(formGroup) as any;

        expect(item).toMatchObject({});
      });

      it('should return IItem', () => {
        const formGroup = service.createItemFormGroup(sampleWithRequiredData);

        const item = service.getItem(formGroup) as any;

        expect(item).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IItem should not enable id FormControl', () => {
        const formGroup = service.createItemFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewItem should disable id FormControl', () => {
        const formGroup = service.createItemFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
