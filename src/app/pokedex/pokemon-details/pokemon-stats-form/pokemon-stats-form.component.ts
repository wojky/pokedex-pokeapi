import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'pokeapi';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-stats-form',
  templateUrl: './pokemon-stats-form.component.html',
  styles: [
    `
      input {
        text-align: right;
        width: 75px;
      }

      .error {
        border: 1px solid red;
      }
    `,
  ],
})
export class PokemonStatsFormComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  statsForm!: FormGroup;
  isEditMode = false;

  ngOnInit(): void {
    this.statsForm = this.createForm();
  }

  toggleEditMode(): void {
    // TODO: when caching will be ready, update pokemon stats
    this.isEditMode = !this.isEditMode;

    Object.keys(this.statsForm.controls).forEach((controlName) => {
      if (this.isEditMode) {
        this.statsForm.controls[controlName].enable();
      } else {
        this.statsForm.controls[controlName].disable();
      }
    });
  }

  private createForm(): FormGroup {
    const formControls: {
      [key: string]: FormControl;
    } = {};

    this.pokemon.stats.forEach((stat) => {
      formControls[stat.stat.name] = new FormControl(
        { value: stat.base_stat, disabled: !this.isEditMode },
        [Validators.max(300), Validators.min(1), Validators.required]
      );
    });

    return new FormGroup(formControls);
  }
}
