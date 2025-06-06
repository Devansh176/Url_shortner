import express from 'express';
import { UrlModel } from '../model/shortUrl';


export const createUrl = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        console.log("The Full Url is : ", req.body.fullUrl);
        const fullUrl = req.body.fullUrl;
        const urlFound = await UrlModel.find({ fullUrl });

        if(urlFound.length > 0) {
            res.status(409);
            res.send(urlFound);
        } else {
            const shortUrl = await UrlModel.create({ fullUrl });
            res.status(201).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong"});
    }
};



export const getAllUrl = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const shortUrls = await UrlModel.find();
        if(shortUrls.length < 0) {
            res.status(404).send({message: "Short Urls not found"});
        } else {
            res.status(200).send(shortUrls);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong"});
    }
};



export const getUrl = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const shortUrl = await UrlModel.findOne({shortUrl: req.params.id});
        if(!shortUrl) {
            res.status(404).send({message: "Short Url not found"});
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`); 
            res.status(200).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong"});
    }
};



export const deleteUrl = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const shortUrl = await UrlModel.findByIdAndDelete({_id: req.params.id});
        if(shortUrl) {
            res.status(204).send({message: "Requested Url successfully deleted"});
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong"});
    }
};