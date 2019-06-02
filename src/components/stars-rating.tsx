import { Component } from 'react';
import * as React from 'react';
import { Star } from './star';

export interface IProps {
    totalStars?: number;
}

export interface IState {
    starsSelected: number;
}

export class StarsRating extends Component<IProps, IState>  {
    state: IState = {
        starsSelected: 0
    };

    constructor(props: any) {
        super(props);
        this.state = {
            starsSelected: 0
        }
    }

    componentWillMount() {
        
    }

    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;

        return ( 
            <div className="star-rating">
                {Array(totalStars).fill(null).map((n, i) =>
                    (<Star key={i}
                        selected={starsSelected > i}
                        onClick={() => this.change(i + 1)}
                    />)
                )}
                <p>{starsSelected} из {totalStars} звезд</p>
            </div>
        );
    }
    change(starsSelected: number) {
        this.setState({ starsSelected });
    }

}
