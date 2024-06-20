import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );

    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error)
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error", error)
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error", error)
    }
    return false;
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error", error)
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: getAllPosts :: error", error)
      return false;
    }
  }

  // File upload methods
  async uploadFile(file) {
    try {
      await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: error", error)
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appWriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: error", error)
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      config.appWriteBucketId,
      fileId
    )
  }
}

const service = new Service();

export default service;