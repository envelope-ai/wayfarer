import { CreateEmbeddingRequestInput, CreateEmbeddingResponse } from "openai";
import { ByWrapper, Metadata, Option } from "../common-types";
import { InsertResponse } from "../writer/types";

export interface InitOpenAIRequest {
  openai_key?: Option<string>;
  openai_key_filepath?: Option<string>;
}

export interface InitOpenAIResponse {
  success: boolean;
}

export type BuildAndInsertEmbeddingsRequest = ByWrapper<{
  input_data: CreateEmbeddingRequestInput;
}>;

export type BuildAndInsertEmbeddingsFromOpenAIRequest = ByWrapper<{
  model: string;
  input_data: CreateEmbeddingRequestInput;
  document_metadata?: Option<Metadata[]>;
  openai_user?: Option<string>;
}>;

export interface BuildAndInsertEmbeddingsFromOpenAIResponse {
  openai_response: CreateEmbeddingResponse;
  starpoint_response: InsertResponse;
}
