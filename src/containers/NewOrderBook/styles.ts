import styled from 'styled-components';

interface OrderBookProps {
	tabState: 'all' | 'buy' | 'sell';
}

const OrderBookStyleVar = {
	headHeight: '32px',
	tbHeadHeight: '30px',
	tickerHeight: '30px',
};

export const OrderBookStyle = styled.div<OrderBookProps>`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: calc(100% - 6px);
	color: white;
	padding: 0 10px;
	.td-order-book {
		background-color: #313445;
		height: 100%;
		padding-top: 10px;
		padding-bottom: 15px;
		&-item__negative {
			color: var(--header-negative-text-color);
		}
		&-item__positive {
			color: var(--header-positive-text-color);
		}
		&-tooltip {
			bottom: 200px;
		}
		&-header {
			height: ${OrderBookStyleVar.headHeight};
			svg {
				cursor: pointer;
			}
		}
		&-tbheader {
			height: ${OrderBookStyleVar.tbHeadHeight};
			padding-top: 6px;
			padding-bottom: 6px;
			color: #848e9c;
			> div {
				display: inline-block;
				width: 28%;
				&:last-child,
				&:first-child {
					width: 36%;
				}
			}
		}
		&-ticker {
			height: ${OrderBookStyleVar.tickerHeight};
			margin: 5px 18px !important;
			font-size: 14px;
			&__last-price {
				font-size: 20px;
			}
			&__usd {
				color: #848e9c;
			}
		}
		&-table {
			height: ${(props: OrderBookProps) =>
				props.tabState === 'all'
					? `calc(
				(
						100% - ${OrderBookStyleVar.headHeight} - ${OrderBookStyleVar.tickerHeight} -
							${OrderBookStyleVar.tbHeadHeight} - 15px
					) / 2
			)`
					: `calc(100% - ${OrderBookStyleVar.headHeight} - ${OrderBookStyleVar.tickerHeight} - ${OrderBookStyleVar.tbHeadHeight})`};
			display: block;
			thead,
			tbody {
				display: block;
				tr {
					display: block;
					background-color: transparent;
					cursor: pointer;
					:hover {
						background-color: #4e5463;
					}
					td,
					th {
						width: 28%;
						display: inline-block;
						text-align: left;
						&:last-child,
						&:first-child {
							width: 36%;
						}
						&:last-child {
							text-align: right;
						}
					}
				}
			}
			tbody {
				height: 100%;
				overflow-y: scroll;
				tr {
					margin-top: 1px;
					margin-bottom: 1px;
					webkit-animation: pisca4 2.5s ; /* Safari 4+ */
					moz-animation:    pisca4 2.5s ; /* Fx 5+ */
					o-animation:      pisca4 2.5s ; /* Opera 12+ */
					animation:         pisca4 2.5s ; /* IE 10+ */
					td {
						height: 100%;
					}
				}
			}
			&.td-reverse-table-body {
				tbody {
					transform: rotate(180deg);
					.td-order-book-table__empty_data {
						transform: rotate(180deg);
					}
					tr {
						direction: rtl;
						webkit-animation: pisca3 2.5s ; /* Safari 4+ */
						moz-animation:    pisca3 2.5s ; /* Fx 5+ */
						o-animation:      pisca3 2.5s ; /* Opera 12+ */
						animation:         pisca3 2.5s ; /* IE 10+ */
						td {
							transform: rotate(180deg);
						}
					}
				}
			}
		}
	}
	@-webkit-keyframes pisca3 {
		from { background-color: #13887 ; }
		to { background-color: transparent; }
	  }
	  @-moz-keyframes pisca3 {
		from { background-color: #13b887 ; }
		to { background-color: transparent; }
	  }
	  @-o-keyframes pisca3 {
		from { background-color: #13b887 ; }
		
		to { background-color: transparent; }
	  }
	  @keyframes pisca3 {
		from { background-color: #13b887; }
		to { background-color: transparent; }
	  }

	  @-webkit-keyframes pisca4 {
		from { background-color: #ef5350  ; }
		to { background-color: transparent; }
	  }
	  @-moz-keyframes pisca4 {
		from { background-color: #ef5350  ; }
		to { background-color: transparent; }
	  }
	  @-o-keyframes pisca4 {
		from { background-color: #ef5350  ; }
		
		to { background-color: transparent; }
	  }
	  @keyframes pisca4 {
		from { background-color: #ef5350 ; }
		to { background-color: transparent; }
	  }

`;

interface TrProps {
	percentWidth: number;
	placement: 'left' | 'right';
	color: string;
}

export const TrStyle = styled.tr<TrProps>`
	position: relative;
	z-index: 5;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: ${(props: TrProps) => (props.placement === 'right' ? 0 : 'unset')};
		bottom: 0;
		left: ${(props: TrProps) => (props.placement === 'left' ? 0 : 'unset')};
		background-color: ${(props: TrProps) => props.color};
		width: ${(props: TrProps) => props.percentWidth}%;
		z-index: -5;
		webkit-animation: piscaX 2s ; /* Safari 4+ */
		moz-animation:    piscaX 2s ; /* Fx 5+ */
		o-animation:      piscaX 2s ; /* Opera 12+ */
		animation:         piscaX 2s ; /* IE 10+ */
	}
	@-webkit-keyframes piscaX {
		from { background-color: ${(props: TrProps) => props.color}; }
		to { background-color: transparent; }
	  }
	  @-moz-keyframes piscaX {
		from { background-color: ${(props: TrProps) => props.color}; }
		to { background-color: transparent; }
	  }
	  @-o-keyframes piscaX {
		from { background-color: ${(props: TrProps) => props.color}; }
		
		to { background-color: transparent; }
	  }
	  @keyframes piscaX {
		from { background-color: ${(props: TrProps) => props.color}; }
		to { background-color: transparent; }
	  }

	
`;
