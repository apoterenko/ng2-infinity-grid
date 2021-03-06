import {
	ViewEncapsulation,
	Component,
	Input,
	EventEmitter,
	Output
} from '@angular/core';

import {
	InfinityPage,
	InfinityPageData
} from './infinity-data-source.service';

@Component({
	selector: 'InfinityGrid',
	template: `
			<div style="display: table-row;">
				<div class="infinity-grid-header">
					<div class="infinity-grid-header-cell">
						COLUMN1
					</div>
				</div>
			</div>
			<div style="display: table-row; height: 100%;">
				<div style="position: relative; width: 100%; height: 100%;">
					<div style="position: absolute; width: 100%; height: 100%;">
						<InfinityTable [pageData]="pageData"
									   [loadingMessage]="loadingMessage"
									   [emptyMessage]="emptyMessage"
									   [preventLoadPageAfterViewInit]="preventLoadPageAfterViewInit"
									   (fetchPage)="onFetchPage($event)">
						</InfinityTable>
					</div>
				</div>
			</div>
		`,
	styles: [
		`
		infinitygrid {
		    display: table;
		    height: 100%;
		    width: 100%;
		    border: 1px solid #808080;
		    cursor: default;
		}
		
		.infinity-grid-header {
		    background: linear-gradient(#fff, #d3d3d3);
		}
		
		.infinity-grid-header-cell {
		    padding: 8px;
		    display: inline-block;
		}
		`
	],
	encapsulation: ViewEncapsulation.None,
})
export class InfinityGrid {

	@Input() loadingMessage: string;
	@Input() emptyMessage: string;
	@Input() pageData: InfinityPageData<any>;
	@Input() preventLoadPageAfterViewInit: boolean;

	@Output() fetchPage: EventEmitter<InfinityPage> = new EventEmitter<InfinityPage>();

	/**
	 * @template
	 */
	private onFetchPage(infinityPage: InfinityPage) {
		this.fetchPage.emit(infinityPage);
	}
}
