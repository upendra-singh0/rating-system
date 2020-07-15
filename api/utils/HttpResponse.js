class HttpResponse {
  static success(req, res, data, message) {
    res.status(200).json({
      data,
      status: 200,
      message: message || 'success',
    });
  }

  static internalError(req, res, data, message) {
    res.status(500).json({
      data,
      status: 500,
      message: message || 'internal server error',
    });
  }

  static badRequest(req, res, data, message) {
    res.status(400).json({
      data,
      status: 400,
      message: message || 'cannot process data',
    });
  }

  static unAuthorizedRequest(req, res, data, message) {
    res.status(401).json({
      data,
      status: 401,
      message: message || 'unauthorized access',
    });
  }

  static resourceNotFound(req, res, data, message) {
    res.status(404).json({
      data,
      status: 404,
      message: message || 'resource not found',
    });
  }

  static dataNotFound(req, res, data, message) {
    res.status(204).json({
      data,
      status: 204,
      message: message || 'requested data not found',
    });
  }

  static alreadyReported(req, res, data, message) {
    res.status(208).json({
      data,
      status: 208,
      message: message || 'already reported',
    });
  }

  static unprocessable(req, res, data, message) {
    res.status(422).json({
      data,
      status: 422,
      message: message || 'unprocessable entity',
    });
  }

  static async handleRequestResponse(callback, params, message, req, res) {
    try {
      const response = await callback(params);
      HttpResponse.success(req, res, response, message);
    } catch (error) {
      HttpResponse.internalError(req, res, null, error);
    }
  }
}

export default HttpResponse;
