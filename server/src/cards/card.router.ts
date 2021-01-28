import express from 'express';

import { getCardsService } from './card.service';
import { RSMongoClient } from '../db-client/mongo-client';

export const getCardsRouter = (mongoClient: RSMongoClient) => {
  const router = express.Router();
  const cardsService = getCardsService(mongoClient);

  router.post(`/new`, async (req, res, next) => {
    try {
      const data = await cardsService.create(req.body);
      res.json({ data });
    } catch (err) {
      next(err);
    }
  });

  // router.post(`/all`, async (req, res, next) => {
  //   try {
  //     const data = await listsService.findAllByUserBoard(req.body);
  //     res.json({ data });
  //   } catch (err) {
  //     next(err);
  //   }
  // });

  // router.delete(`/:id`, async (req, res, next) => {
  //   try {
  //     const data = await listsService.remove(req.params.id);
  //     res.json({ data });
  //   } catch (err) {
  //     next(err);
  //   }
  // });

  // router.put(`/:id`, async (req, res, next) => {
  //   try {
  //     const data = await listsService.update(req.params.id, req.body);
  //     res.json({ data });
  //   } catch (err) {
  //     next(err);
  //   }
  // });

  return router;
};
