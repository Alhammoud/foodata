import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';
import {setProductFoundToFalse} from '../../actions';


class SearchResults extends Component {

    componentWillUnmount() {
        this.props.setProductFoundToFalse()
    }

    render() {
        return (
        <>
            {this.props.error===0? <div style={{margin: "50px"}}>
                <p>Hersteller: {this.props.product.hersteller}</p>
                <p>Produktname: {this.props.product.productname}</p>
                <p>Produktgruppe: {this.props.product.productGroup}</p>
                <p>Brennwert in KCAL: {this.props.product.brennwertKCAL}</p>
                <p>Kohlenhydrate (Zucker gesamt): {this.props.product.kohlenhydrate}</p>
                <p>Fett: {this.props.product.fett}</p>
                <p>davon gesättigte Fettsäuren: {this.props.product.gesaettigteFettsaeuren}</p>
                <p>Natrium : {this.props.product.natrium}</p>
                <p>Eiweiß: {this.props.product.protein}</p>
                <p>Ballaststoffe: {this.props.product.ballaststoffe}</p>
                <p>Anteil Obst / Gemüse / Nüsse: {this.props.product.obstGemueseNuesseAnteil}</p>
            </div> : <div style={{margin: "50px"}}><p>Fehlernummer: {this.props.error}</p><p>Fehlermeldung: {this.props.message}</p></div>}
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product,
    productFound: state.productFound,
    error: state.error,
    message: state.message
})

export default connect(mapStateToProps,{setProductFoundToFalse})(SearchResults);
